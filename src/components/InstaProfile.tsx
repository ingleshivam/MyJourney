"use client";
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  X,
  Home,
  Search,
  Plus,
  Regex as Reel,
  MergeIcon as MessageIcon,
  Bookmark,
  User,
  Menu,
  Settings,
  Grid3x3,
  Contact,
  Compass,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Play,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  type: string;
  images: string[];
  videos?: string[];
  likes: number;
  comments: number;
  date: string;
  title: string;
}

export default function InstaProfile({ ref }: { ref: any }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [activeTab, setActiveTab] = useState("posts");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  console.log("Selected Post : ", selectedPost);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const posts = [
    {
      id: 1,
      type: "image",
      images: ["/posts/RamJanmabhoomi1.webp"],
      likes: 0,
      comments: 0,
      date: "April 27",
      title: "Shri Ram Janmabhoomi, Ayodhya",
    },
    {
      id: 2,
      type: "image",
      images: [
        "/posts/Jaigad1.webp",
        "/posts/Jaigad2.webp",
        "/posts/Jaigad3.webp",
        "/posts/Jaigad4.webp",
        "/posts/Jaigad5.webp",
        "/posts/Jaigad6.webp",
        "/posts/Jaigad7.webp",
      ],
      likes: 0,
      comments: 0,
      date: "April 22",
      title: "Jaigad Fort, Ratnagiri",
    },
    {
      id: 3,
      type: "video",
      images: [
        "/posts/Devghali1.webp",
        "/posts/Devghali2.webp",
        "/posts/Devghali3.webp",
        "/posts/Devghali4.webp",
        "/posts/Devghali5.webp",
        "/posts/Devghali5.webp",
      ],
      videos: [
        "/posts/Devghali6.mp4",
        "/posts/Devghali7.mp4",
        "/posts/Devghali8.mp4",
        "/posts/Devghali9.mp4",
      ],
      likes: 0,
      comments: 0,
      date: "April 22",
      title: "Devghali Beach, Kasheli",
    },
    {
      id: 4,
      type: "video",
      images: [
        "/posts/Prayagraj1.webp",
        "/posts/Prayagraj2.webp",
        "/posts/Prayagraj3.webp",
        "/posts/Prayagraj4.webp",
        "/posts/Prayagraj5.webp",
        "/posts/Prayagraj6.webp",
        "/posts/Prayagraj7.webp",
        "/posts/Prayagraj8.webp",
        "/posts/Prayagraj9.webp",
        "/posts/Prayagraj10.webp",
      ],
      videos: ["/posts/Prayagraj11.mp4"],
      likes: 0,
      comments: 0,
      date: "April 22",
      title: "Prayagraj - The Sangam City",
    },
    {
      id: 5,
      type: "image",
      images: [
        "/posts/GanpatiPule1.webp",
        "/posts/GanpatiPule2.webp",
        "/posts/GanpatiPule3.webp",
      ],
      likes: 0,
      comments: 0,
      date: "April 21",
      title: "गणेश मंदिर, गणपतीपुळे",
    },
    {
      id: 6,
      type: "image",
      images: [
        "/posts/Panhala1.webp",
        "/posts/Panhala2.webp",
        "/posts/Panhala3.webp",
        "/posts/Panhala4.webp",
        "/posts/Panhala5.webp",
        "/posts/Panhala6.webp",
        "/posts/Panhala7.webp",
        "/posts/Panhala8.webp",
        "/posts/Panhala9.webp",
        "/posts/Panhala10.webp",
        "/posts/Panhala11.webp",
        "/posts/Panhala12.webp",
        "/posts/Panhala13.webp",
      ],
      likes: 0,
      comments: 0,
      date: "April 21",
      title: "Panhala Fort",
    },
    {
      id: 7,
      type: "video",
      images: [
        "/posts/Jyotiba1.webp",
        "/posts/Jyotiba2.webp",
        "/posts/Jyotiba3.webp",
        "/posts/Jyotiba4.webp",
      ],
      videos: ["/posts/Jyotiba5.mp4"],
      likes: 0,
      comments: 0,
      date: "April 21",
      title: "Jyotiba Temple, Wadi Ratnagiri Kolhapur.",
    },
    {
      id: 8,
      type: "image",
      images: [
        "/posts/Panvel1.webp",
        "/posts/Panvel2.webp",
        "/posts/Panvel3.webp",
        "/posts/Panvel4.webp",
        "/posts/Panvel5.webp",
        "/posts/Panvel6.webp",
        "/posts/Panvel7.webp",
        "/posts/Panvel8.webp",
        "/posts/Panvel9.webp",
        "/posts/Panvel10.webp",
        "/posts/Panvel11.webp",
      ],
      likes: 0,
      comments: 0,
      date: "April 21",
      title: "Panvel",
    },
    {
      id: 9,
      type: "image",
      images: [
        "/posts/Miraj1.webp",
        "/posts/Miraj2.webp",
        "/posts/Miraj3.webp",
      ],
      likes: 0,
      comments: 0,
      date: "April 21",
      title: "Miraj-Sangli, Maharashtra",
    },
    {
      id: 10,
      type: "video",
      images: ["/posts/Dwarka1.webp", "/posts/Dwarka2.webp"],
      videos: ["/posts/Dwarka3.webp", "/posts/Dwarka4.webp"],
      likes: 0,
      comments: 0,
      date: "April 21",
      title: "Dwarkadhish Temple Dwarka",
    },
    {
      id: 11,
      type: "image",
      images: [
        "/posts/Mahalaxmi1.webp",
        "/posts/Mahalaxmi2.webp",
        "/posts/Mahalaxmi3.webp",
        "/posts/Mahalaxmi4.webp",
        "/posts/Mahalaxmi5.webp",
        "/posts/Mahalaxmi6.webp",
      ],
      likes: 0,
      comments: 0,
      date: "April 21",
      title: "Mahalaxmi Temple",
    },
    {
      id: 12,
      type: "image",
      images: ["/posts/Somnath1.webp"],
      likes: 0,
      comments: 0,
      date: "April 20",
      title: "Somnath Temple, Gujarat",
    },
  ];

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessageClick = () => {
    setShowMessageModal(true);
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessageText("");
      setShowMessageModal(false);
    }
  };

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setCurrentImageIndex(0);
  };

  const handleClosePostDialog = () => {
    setSelectedPost(null);
    setCurrentImageIndex(0);
  };

  // Build a unified media list for the selected post
  const mediaItems: Array<{
    kind: "image" | "video";
    src: string;
    poster?: string;
  }> = selectedPost
    ? (() => {
        const items: Array<{
          kind: "image" | "video";
          src: string;
          poster?: string;
        }> = [];
        // Push images first
        selectedPost.images.forEach((img) =>
          items.push({ kind: "image", src: img })
        );
        // If there are videos, append them with poster fallback to first image (or own image if matched by index)
        if (selectedPost.videos && selectedPost.videos.length > 0) {
          selectedPost.videos.forEach((video, idx) =>
            items.push({
              kind: "video",
              src: video,
              poster:
                selectedPost.images[
                  Math.min(idx, selectedPost.images.length - 1)
                ],
            })
          );
        }
        return items;
      })()
    : [];

  const handleNextImage = () => {
    if (selectedPost) {
      if (currentImageIndex < mediaItems.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedPost) return;

      if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      } else if (event.key === "Escape") {
        handleClosePostDialog();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedPost, currentImageIndex]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 h-full w-full overflow-hidden bg-white"
    >
      <div className="w-full h-full flex bg-black">
        <div className="w-20 border-r border-gray-800 flex flex-col items-center py-6 gap-8 bg-black mt-1 overflow-hidden">
          <div className="mb-2 rounded-full  flex items-center justify-center ">
            <img src="/icons/InstagramIcon.png" className="w-[24px] h-[24px]" />
          </div>

          <button className="text-white hover:text-gray-300 transition">
            <Home size={24} />
          </button>
          <button className="text-white hover:text-gray-300 transition">
            <Search size={24} />
          </button>
          <button className="text-white hover:text-gray-300 transition">
            <Compass size={24} />
          </button>
          <button className="text-white hover:text-gray-300 transition">
            <img src="/icons/Reels.png" className="w-[24px] h-[24px]" />
          </button>
          <button className="text-white hover:text-gray-300 transition relative">
            <img src="/icons/Messanger.png" className="w-[24px] h-[24px]" />

            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">
              1
            </span>
          </button>
          <button className="text-white hover:text-gray-300 transition">
            <Heart size={24} />
          </button>
          <button className="text-white hover:text-gray-300 transition">
            <Plus size={24} />
          </button>

          <div className="mx-auto">
            <div
              className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 bg-cover"
              style={{ backgroundImage: `url("/images/instaProfilePic.jpg")` }}
            ></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-black">
          <div className=" px-8 py-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-8 items-start flex-1">
                <div className="flex-shrink-0">
                  <div
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 p-1"
                    style={{
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/instaProfilePic.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-[20px] font-bold text-white">
                      theunknowntraveller___
                    </h1>
                    <button className="px-6 py-1.5 bg-gray-800 text-white rounded-lg font-semibold text-sm hover:bg-gray-700 transition">
                      Edit profile
                    </button>
                    <button className="px-6 py-1.5 bg-gray-800 text-white rounded-lg font-semibold text-sm hover:bg-gray-700 transition">
                      View archive
                    </button>
                    <button className="text-gray-400 hover:text-white transition">
                      <Settings size={20} />
                    </button>
                  </div>

                  <div className="flex gap-8 mb-4">
                    <div className="flex items-center gap-1">
                      <p className="text-white font-bold">12</p>
                      <p className="text-gray-400 text-sm">posts</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-white font-bold">1</p>
                      <p className="text-gray-400 text-sm">follower</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-white font-bold">1</p>
                      <p className="text-gray-400 text-sm">following</p>
                    </div>
                  </div>

                  <div className="text-sm text-white">
                    <p className="font-semibold mb-1">theunknowntraveller___</p>
                    <p className="text-gray-300 mb-2">
                      💻 Software Developer | 🌍 Traveler at Heart Code on
                      weekdays, explore on holidays 🚀
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-800 px-8 flex justify-center gap-[10vw]">
            <button
              onClick={() => setActiveTab("posts")}
              className={`py-4 font-semibold text-sm transition border-b-2 ${
                activeTab === "posts"
                  ? "text-white border-white"
                  : "text-gray-500 border-transparent hover:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Grid3x3 />
              </div>
            </button>
            <button className="text-white border-white">
              <Contact />
            </button>
          </div>

          <div className="px-8 py-6">
            <div className="grid grid-cols-3 gap-1">
              {posts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handlePostClick(post)}
                  className="relative aspect-square rounded-sm overflow-hidden group cursor-pointer bg-gray-900"
                >
                  <img
                    src={post.images[0] || "/placeholder.svg"}
                    alt={`Post ${post.id}`}
                    className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
                  />

                  {/* Multiple images indicator */}
                  {post.images.length > 1 && (
                    <div className="absolute top-2 right-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="drop-shadow-lg"
                      >
                        <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11.5-6L8 12.5l2.5 2.5L14 10l-3.5-3.5zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
                      </svg>
                    </div>
                  )}

                  {/* Video play button indicator */}
                  {post.type === "video" && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-black/50 rounded-full p-1">
                        <Play size={16} className="text-white fill-white" />
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Heart size={20} fill="white" />{" "}
                      {(post.likes / 1000).toFixed(1)}K
                    </div>
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <MessageCircle size={20} /> {post.comments}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
          boxShadow: "inset 0 1px 3px rgba(255,255,255,0.1)",
        }}
      ></div>

      {showMessageModal && (
        <div className="absolute inset-0 rounded-2xl bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-6 w-80 shadow-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white">
                Message ig_shivampatil
              </h2>
              <button
                onClick={() => setShowMessageModal(false)}
                className="text-gray-500 hover:text-gray-300"
              >
                <X size={20} />
              </button>
            </div>
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg mb-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={4}
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowMessageModal(false)}
                className="flex-1 bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSendMessage}
                disabled={!messageText.trim()}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Post Dialog */}
      {selectedPost && (
        <div
          className="absolute inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm px-8"
          onClick={handleClosePostDialog}
        >
          <div
            className="bg-black rounded-2xl grid grid-cols-2 flex justify-center shadow-2xl border border-gray-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800 hidden">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 p-0.5">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/instaProfilePic.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-white font-semibold">
                    theunknowntraveller___
                  </span>
                </div>
                <button
                  onClick={handleClosePostDialog}
                  className="text-gray-500 hover:text-gray-300"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Media Container */}
              <div className="relative flex-1 flex items-center justify-center bg-black">
                <div className="relative w-full h-full items-center justify-center">
                  {mediaItems[currentImageIndex]?.kind === "video" ? (
                    <video
                      src={mediaItems[currentImageIndex]?.src}
                      controls
                      className="max-w-full max-h-full object-contain"
                      poster={mediaItems[currentImageIndex]?.poster}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={mediaItems[currentImageIndex]?.src}
                      alt={`Post ${selectedPost.id}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}

                  {/* Navigation Arrows */}
                  {(() => {
                    return (
                      mediaItems.length > 1 && (
                        <>
                          {currentImageIndex > 0 && (
                            <button
                              onClick={handlePrevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                            >
                              <ChevronLeft size={24} />
                            </button>
                          )}
                          {currentImageIndex < mediaItems.length - 1 && (
                            <button
                              onClick={handleNextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
                            >
                              <ChevronRight size={24} />
                            </button>
                          )}
                        </>
                      )
                    );
                  })()}

                  {/* Media Dots Indicator */}
                  {(() => {
                    return (
                      mediaItems.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {Array.from(
                            { length: mediaItems.length },
                            (_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition ${
                                  index === currentImageIndex
                                    ? "bg-white"
                                    : "bg-white/50 hover:bg-white/70"
                                }`}
                              />
                            )
                          )}
                        </div>
                      )
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col justify-between">
              <div className="text-white text-[14px]">
                <div className="flex items-center gap-3 px-4 pt-4">
                  <div>
                    <img
                      src="/images/instaProfilePic.jpg"
                      className="h-[30px] w-[30px] rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <p>theunknowntraveller___</p>
                      <p>{selectedPost.title}</p>
                    </div>
                    <div>
                      <button
                        onClick={handleClosePostDialog}
                        className="text-white-500 hover:text-white-300"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <button className="text-white hover:text-gray-300 transition">
                      <Heart size={24} />
                    </button>
                    <button className="text-white hover:text-gray-300 transition">
                      <MessageCircle size={24} />
                    </button>
                    <button className="text-white hover:text-gray-300 transition">
                      <MoreHorizontal size={24} />
                    </button>
                  </div>
                  <button className="text-white hover:text-gray-300 transition">
                    <Bookmark size={24} />
                  </button>
                </div>

                <div className="text-white">
                  <p className="font-semibold mb-1 text-[16px]">
                    Be the first to like this
                  </p>
                  <p className="text-xs text-gray-300">
                    <span className="font-semibold">{selectedPost.date}</span>{" "}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    View all {selectedPost.comments} comments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
