import Map "mo:core/Map";
import Text "mo:core/Text";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // ----------------------
  // Data Types
  // ----------------------

  type Principal = Principal.Principal;

  public type UserProfile = {
    displayName : Text;
    company : Text;
    website : Text;
    bio : Text;
  };

  public type BlogPost = {
    id : Nat;
    title : Text;
    slug : Text;
    excerpt : Text;
    content : Text;
    tags : [Text];
    author : Principal;
    authorDisplayName : ?Text;
    createdAt : Time.Time;
    updatedAt : Time.Time;
  };

  // ----------------------
  // State
  // ----------------------

  var nextPostId = 0;

  let userProfiles = Map.empty<Principal, UserProfile>();
  let posts = Map.empty<Nat, BlogPost>();

  // ----------------------
  // Internal Helpers
  // ----------------------

  func isAuthor(postId : Nat, caller : Principal) : Bool {
    switch (posts.get(postId)) {
      case (null) { false };
      case (?post) { Principal.equal(post.author, caller) };
    };
  };

  // ----------------------
  // User Profile Functions
  // ----------------------

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    userProfiles.get(user);
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    userProfiles.get(caller);
  };

  // ----------------------
  // Blog Post Functions
  // ----------------------

  public shared ({ caller }) func createPost(
    title : Text,
    slug : Text,
    excerpt : Text,
    content : Text,
    tags : [Text],
    authorDisplayName : ?Text,
  ) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create posts");
    };

    let createdAt = Time.now();
    let post : BlogPost = {
      id = nextPostId;
      title;
      slug;
      excerpt;
      content;
      tags;
      author = caller;
      authorDisplayName;
      createdAt;
      updatedAt = createdAt;
    };

    posts.add(nextPostId, post);
    nextPostId += 1;
    post.id;
  };

  public shared ({ caller }) func updatePost(
    postId : Nat,
    title : Text,
    slug : Text,
    excerpt : Text,
    content : Text,
    tags : [Text],
    authorDisplayName : ?Text,
  ) : async () {
    let isPostAuthor = isAuthor(postId, caller);
    let isAdminUser = AccessControl.isAdmin(accessControlState, caller);

    if (not (isPostAuthor or isAdminUser)) {
      Runtime.trap("Unauthorized: Only the author or admin can update this post");
    };

    switch (posts.get(postId)) {
      case (null) { Runtime.trap("Post not found") };
      case (?existing) {
        let updated : BlogPost = {
          existing with
          title;
          slug;
          excerpt;
          content;
          tags;
          authorDisplayName;
          updatedAt = Time.now();
        };
        posts.add(postId, updated);
      };
    };
  };

  public shared ({ caller }) func deletePost(postId : Nat) : async () {
    let isPostAuthor = isAuthor(postId, caller);
    let isAdminUser = AccessControl.isAdmin(accessControlState, caller);

    if (not (isPostAuthor or isAdminUser)) {
      Runtime.trap("Unauthorized: Only the author or admin can delete this post");
    };

    if (not posts.containsKey(postId)) {
      Runtime.trap("Post not found");
    };

    posts.remove(postId);
  };

  public query ({ caller }) func getPostById(postId : Nat) : async ?BlogPost {
    posts.get(postId);
  };

  public query ({ caller }) func getAllPosts() : async [BlogPost] {
    posts.values().toArray();
  };

  public query ({ caller }) func getPostsByTag(tag : Text) : async [BlogPost] {
    let results = List.empty<BlogPost>();

    for (post in posts.values()) {
      for (t in post.tags.values()) {
        if (Text.equal(t, tag)) {
          results.add(post);
        };
      };
    };

    results.toArray();
  };
};
