


import { Loader2, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux"; // Fixed import
import api from "../configs/api";
import toast from "react-hot-toast";

const ProfessionalSummaryForm = ({ data, onChange, setResumeData }) => {
  const { token } = useSelector((state) => state.auth); // Fixed: useSelector is a named import
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSummary = async () => {
    if (!data?.trim()) {
      toast.error("Please write a draft summary first!");
      return;
    }

    if (!token) {
      toast.error("Please log in to use AI features.");
      return;
    }

    try {
      setIsGenerating(true);
      const prompt = `Enhance this professional summary to make it more impactful, concise, and professional: "${data}"`;

      const response = await api.post(
        "/api/ai/enhance-pro-sum",
        { userContent: prompt },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Fixed: Bearer token
          },
        }
      );

      // Fixed: correct field name
      setResumeData((prev) => ({
        ...prev,
        professional_summary: response.data.enhancedContent,
      }));

      // Auto-update textarea
      onChange(response.data.enhancedContent);

      toast.success("Summary enhanced successfully!");
    } catch (error) {
      console.error("AI Enhance Error:", error);
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to enhance summary. Try again.";
      toast.error(message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Professional Summary
          </h3>
          <p className="text-sm text-gray-500">
            Add a compelling summary to highlight your strengths
          </p>
        </div>

        {/* AI Enhance Button */}
        <button
          disabled={isGenerating || !data?.trim()}
          onClick={generateSummary}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <Loader2 className="size-4 animate-spin" /> // Fixed: size-4
          ) : (
            <Sparkles className="size-4" />
          )}
          {isGenerating ? "Enhancing..." : "AI Enhance"}
        </button>
      </div>

      {/* Textarea Section */}
      <div className="mt-6">
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          className="w-full p-4 border border-gray-300 rounded-lg text-sm 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     outline-none transition-all resize-none"
          placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."
        />

        <p className="text-xs text-gray-500 mt-3 text-center max-w-2xl mx-auto">
          <strong>Tip:</strong> Keep it concise (3–4 sentences) and focus on
          your most relevant achievements and skills.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;