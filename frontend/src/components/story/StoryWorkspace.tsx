import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import ChapterSidebar from "./ChapterSidebar";
import VersionHistoryPanel from "./VersionHistoryPanel";
import StoryViewer from "./StoryViewer";
import ContinueStoryButton from "./ContinueStoryButton";

const StoryWorkspace = () => {
  const currentStory = useSelector(
    (state: RootState) => state.story.currentStory
  );

  if (!currentStory) {
    return (
      <div className="text-white p-10">
        No Story Available
      </div>
    );
  }

  return (
    <div className="flex bg-black h-screen">
      <ChapterSidebar
        chapters={currentStory.chapters}
      />

      <VersionHistoryPanel />

      <div className="flex flex-col flex-1">
        <StoryViewer
          chapters={currentStory.chapters}
        />

        <div className="p-6 border-t border-zinc-800">
          <ContinueStoryButton />
        </div>
      </div>
    </div>
  );
};

export default StoryWorkspace;