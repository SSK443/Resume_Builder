

import React from "react";
import { Plus, Trash2, RotateCcw, GraduationCap } from "lucide-react"; // ✅ Lucide icons

function EducationForm({ data, onChange }) {
  // ➕ Add new education entry
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };
    onChange([...data, newEducation]);
  };

  // 🗑️ Remove an education entry
  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  // 🔁 Update specific education field
  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  // ♻️ Reset all education data
  const resetEducation = () => {
    onChange([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Education Details
          </h3>
          <p className="text-sm text-gray-500">Add your education details</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={resetEducation}
            className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors"
          >
            <RotateCcw className="size-4" />
            Reset
          </button>
          <button
            onClick={addEducation}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors"
          >
            <Plus className="size-4" />
            Add Education
          </button>
        </div>
      </div>

      {/* Empty state */}
      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No Education added yet.</p>
          <p className="text-sm">Click “Add Education” to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((education, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              {/* Title + Remove button */}
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-800">
                  Education #{index + 1}
                </h4>
                <button
                  onClick={() => removeEducation(index)}
                  aria-label="Remove education"
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              {/* Input fields */}
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={education.institution || ""}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  type="text"
                  placeholder="Institution Name"
                  className="px-3 py-2 text-sm rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                  value={education.degree || ""}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  type="text"
                  placeholder="Degree (e.g., Bachelor's, Master's)"
                  className="px-3 py-2 text-sm rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                  value={education.field || ""}
                  onChange={(e) =>
                    updateEducation(index, "field", e.target.value)
                  }
                  type="text"
                  placeholder="Field of Study"
                  className="px-3 py-2 text-sm rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                  value={education.graduation_date || ""}
                  onChange={(e) =>
                    updateEducation(index, "graduation_date", e.target.value)
                  }
                  type="month"
                  placeholder="Graduation Date"
                  className="px-3 py-2 text-sm rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                  value={education.gpa || ""}
                  onChange={(e) =>
                    updateEducation(index, "gpa", e.target.value)
                  }
                  type="text"
                  placeholder="GPA or Percentage"
                  className="px-3 py-2 text-sm rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EducationForm;
