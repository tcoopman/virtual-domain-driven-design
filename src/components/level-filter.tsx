import React, { FC, useState } from "react"

interface LevelFilterProps {
  setLevelFilter: Function
}

enum ContentLevel {
  All = "all",
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
}

interface ButtonsActive {
  isAllActive: boolean
  isBeginnerActive: boolean
  isIntermediateActive: boolean
  isAdvancedActive: boolean
}

const LevelFilter: FC<LevelFilterProps> = ({ setLevelFilter }) => {
  const [areButtonsActive, setButtonsActive] = useState<ButtonsActive>({
    isAllActive: true,
    isBeginnerActive: false,
    isIntermediateActive: false,
    isAdvancedActive: false,
  })
  const levelButtonClicked = (contentLevel: ContentLevel) => {
    let buttonsActive: ButtonsActive = {
      isAllActive: false,
      isBeginnerActive: false,
      isIntermediateActive: false,
      isAdvancedActive: false,
    }
    switch (contentLevel) {
      case ContentLevel.All: {
        buttonsActive.isAllActive = true
        setButtonsActive(buttonsActive)
        setLevelFilter(["all", "beginner", "intermediate", "advanced"])
        break
      }
      case ContentLevel.Beginner: {
        buttonsActive.isBeginnerActive = true
        setButtonsActive(buttonsActive)
        setLevelFilter(["all", "beginner"])
        break
      }
      case ContentLevel.Intermediate: {
        buttonsActive.isIntermediateActive = true
        setButtonsActive(buttonsActive)
        setLevelFilter(["all", "intermediate"])
        break
      }
      case ContentLevel.Advanced: {
        buttonsActive.isAdvancedActive = true
        setButtonsActive(buttonsActive)
        setLevelFilter(["all", "advanced"])
        break
      }
      default: {
        buttonsActive.isAllActive = true
        setButtonsActive(buttonsActive)
        setLevelFilter(["all", "beginner", "intermediate", "advanced"])
      }
    }
  }

  return (
    <div className="flex flex-row items-center justify-center">
      <button
        className={[
          "levelbtn",
          areButtonsActive.isAllActive ? "active" : "",
          "text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400",
        ].join(" ")}
        onClick={() => levelButtonClicked(ContentLevel.All)}
      >
        All levels
      </button>
      <button
        className={[
          "levelbtn",
          areButtonsActive.isBeginnerActive ? "active" : "",
          "text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400",
        ].join(" ")}
        onClick={() => levelButtonClicked(ContentLevel.Beginner)}
      >
        Beginner
      </button>
      <button
        className={[
          "levelbtn",
          areButtonsActive.isIntermediateActive ? "active" : "",
          "text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400",
        ].join(" ")}
        onClick={() => levelButtonClicked(ContentLevel.Intermediate)}
      >
        Intermediate
      </button>
      <button
        className={[
          "levelbtn",
          areButtonsActive.isAdvancedActive ? "active" : "",
          "text-xl m-2 p-2 text-white rounded-lg border-2 border-blue-500 hover:border-blue-400",
        ].join(" ")}
        onClick={() => levelButtonClicked(ContentLevel.Advanced)}
      >
        Advanced
      </button>
    </div>
  )
}

export default LevelFilter
