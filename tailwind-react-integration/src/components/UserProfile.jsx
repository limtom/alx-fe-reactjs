function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 mx-auto my-20 sm:max-w-xs rounded-lg shadow-lg md:p-8 md:max-w-sm ">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto"
      />
      <h1 className="sm:text-lg text-blue-800 my-4 md:text-xl">John Doe</h1>
      <p className="text-gray-600 sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
