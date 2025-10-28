// import { User } from "lucide-react";
// import React from "react";

// function PersonalInfo({
//   data,
//   onchange,
//   removeBackground,
//   setRemoveBackground,
// }) {
//   const handleChange = (field, value) => {
//     onchange({
//       ...data,
//       [field]: value,
//     });
//   };

//   return (
//     <div>
//       <h3 className="text-lg font-semibold text-gray-900">
//         Personal Information
//       </h3>
//       <p>Get Started with the personal</p>
//       <div className="flex items-center gap-2">
//         <label>
//           {data.image ? (
//             <img
//               src={
//                 typeof data.image === "string"
//                   ? data.image
//                   : URL.createObjectURL(data.image)
//               }
//               alt="user-img"
//               className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80"
//             />
//           ) : (
//             <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-gray-500">
//               <User className="size-10 p-2.5 border border-gray-300 rounded-full" />
//               UPload User Image
//             </div>
//           )}
//           <input
//             type="file"
//             accept="image/jpg,image/jpeg,image/png"
//             onChange={(e) => handleChange("image", e.target.files[0])}
//           />
//         </label>

//         {typeof data.image === "object" && (
//           <div className="flex flex-col gap-1 pl-4 text-sm">
//             <p>Remove Background</p>
//             <label htmlFor=""  className="relative inline-flex items- cursor-pointer text-gray-900 gap-3">
//               <input type="checkbox" className="sr-only peer"
//               onchange={()=>setRemoveBackground(prev=>!prev)}  checked={removeBackground}/>
//               <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:bg-indigo-600 transition-colors duration-colors duration-200">

//               </div>
//               <span className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4">

//               </span>

//             </label>
//             input:c
//           </div >
//         )}
//       </div>
//     </div>
//   );
// }

// export default PersonalInfo;

import { User } from "lucide-react";
import React from "react";

function PersonalInfo({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const fields=[
    {key:"Full_name",label:"Full"}
  ]

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">
        Personal Information
      </h3>
      <p className="text-gray-600 text-sm mb-3">
        Get started by adding your personal details
      </p>

      <div className="flex items-center gap-4">
        <label className="cursor-pointer">
          {data.image ? (
            <img
              src={
                typeof data.image === "string"
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="user"
              className="w-16 h-16 rounded-full object-cover mt-2 ring ring-slate-300 hover:opacity-80"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-100 flex flex-col items-center justify-center text-gray-500 text-xs rounded-full ring ring-gray-200">
              <User className="w-6 h-6 mb-1" />
              Upload
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              e.target.files?.[0] && handleChange("image", e.target.files[0])
            }
          />
        </label>

        {/* ✅ Only show if image is uploaded */}
        {data.image && (
          <div className="flex flex-col gap-2 pl-2 text-sm">
            <p className="font-medium text-gray-700">Remove Background</p>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setRemoveBackground((prev) => !prev)}
                checked={removeBackground}
              />
              <div className="w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-indigo-600 transition-colors"></div>
              <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4"></span>
            </label>
          </div>
        )}
      </div>




    </div>
  );
}

export default PersonalInfo;
