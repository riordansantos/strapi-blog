// import React from 'react'

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ad amet omnis animi perferendis nemo cumque doloremque.",
      coverImg:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
    },
    {
      id: 2,
      title: "Blog 2",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ad amet omnis animi perferendis nemo cumque doloremque.",
      coverImg:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
    },
    {
      id: 3,
      title: "Blog 3",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ad amet omnis animi perferendis nemo cumque doloremque.",
      coverImg:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
    },
  ];

  return (
    <div className="w-full bg-[##f9f9f9] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-clos-2 sm:grid-cols-2 gap-8 px-4 text-black">
          {blogs.map((blog) => {
            return (
              <div
                key={blog.title}
                className="bg-white rounded-xl overflow-hidden drop-shadow-md"
              >
                <img
                  src={blog.coverImg}
                  alt="logo"
                  className="h-56 w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="font-bold text-2x1 my-1">{blog.title}</h3>
                  <p className="text-gray-600 text-xl">{blog.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
