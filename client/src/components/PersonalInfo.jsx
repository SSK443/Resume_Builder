

import { BriefcaseBusiness, Globe, Linkedin, Mail, MapPin, Phone, User } from "lucide-react";
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
            {key:"full_name",label:"Full Name",icon:User,type:"text",required:true},
            {key:"email",label:"Email Address",icon:Mail,type:"email",required:true},
            {key:"phone",label:"Phone Number",icon:Phone,type:"tel"},
            {key:"location",label:"Location",icon:MapPin,type:"text"},
            {key:"profession",label:"Profession",icon:BriefcaseBusiness,type:"text"},
            {key:"linkedin",label:"Linkedin Profile",icon:Linkedin,type:"url"},
            {key:"website",label:"Personal Website",icon:Globe,type:"url"}

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
        {typeof data.image==="object" && (
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
{
  fields.map((fields)=>{

const Icon=fields.icon;

return(
  <div key={fields.key} className="space-y-1 mt-5">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
      <Icon className="size-4"/>
      {fields.label}
      {fields.required && <span className="text-red-500">*</span>}

    </label>
    <input type={fields.type} value={data[fields.key] || "" } onChange={(e)=>handleChange(fields.key,e.target.value)}
    
    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm " placeholder={`Enter your ${fields.label.toLowerCase()}`}
required={fields.required}    
    
    
    />
    
  




    </div>




)



  })
}



    </div>
  );
}

export default PersonalInfo;
