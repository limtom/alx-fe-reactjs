import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center mt-15">
      <div>
        <img
          alt="Sarah Chen Avatar"
          className="w-36 h-36 rounded-full object-cover ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all shadow-xl mb-5"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB72gfvEfDIfqG3_gRruzd0GTjFoAsqGRppD4xb4HRMlZPdAwzmrRZny8tD2TXxLo2DdVCLxEY5iZqwnXHo228BL12MOGAm8YL-rYF3JdoByo7ZyPnIdJIJAf3lwWkNIq3wGmZaowF74zEcY1FI9eFHI_nBeBBbakysRKl07PjNbuotkRP_qYMKbWyLMW11B_a75fCZdEhpqtDMFxCxua7lnzO2Ouvo6_cdgdEpHQ2nV8E_-GQ0YXdYcWt3wGhVfgJuHDh0oJ8CbZk_"
        />
        <h3 className="font-bold text-4xl leading-tight text-black group-hover:text-primary transition-colors mb-8">
          Sarah Chen
        </h3>
      </div>
      <div className="text-base text-center tracking-tight">
        <p>Full stack developer passionate about open source and UI design</p>
        <p>Building the future of minimalistic design one pixel at a time</p>
      </div>

      <button className="flex items-center justify-center bg-blue-500 rounded-lg py-2 px-6 mt-8 text-sm shadow-md gap-2 cursor-pointer text-white hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all">
        Visit Github Profile
        <img
          src="../public/north-east.svg"
          alt="north-east"
          className="w-3 h-3 text-white"
        />
      </button>
    </div>
  );
}

export default Profile;
