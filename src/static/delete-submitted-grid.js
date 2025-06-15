const $ = require("jquery") // Declare the $ variable

$(document).ready(() => {
  console.log("Script is running")
  const submittedGridsContainer = document.getElementById("submitted-grids")

  // Function to add delete button to a grid
  function addDeleteButton(grid) {
    // Create delete button
    const deleteButton = document.createElement("button")
    deleteButton.className = "delete-button"
    deleteButton.innerHTML = "×"
    deleteButton.title = "Delete Grid"

    // Add click event to delete button
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()

      // Add confirmation
      if (confirm("Are you sure you want to delete this grid?")) {
        // Add fade out animation
        grid.style.transition = "all 0.3s ease"
        grid.style.opacity = "0"
        grid.style.transform = "scale(0.8)"

        // Remove after animation
        setTimeout(() => {
          if (grid.parentNode) {
            grid.parentNode.removeChild(grid)
          }
        }, 300)
      }
    })

    // Show delete button on hover
    grid.addEventListener("mouseenter", () => {
      if (!grid.querySelector(".delete-button")) {
        grid.appendChild(deleteButton)
      }
    })

    // Hide delete button when not hovering (unless dragging)
    grid.addEventListener("mouseleave", () => {
      const deleteBtn = grid.querySelector(".delete-button")
      if (deleteBtn && !grid.classList.contains("dragging")) {
        deleteBtn.remove()
      }
    })
  }

  // Add delete buttons to existing grids
  const existingGrids = submittedGridsContainer.querySelectorAll(".edit-grid")
  existingGrids.forEach(addDeleteButton)

  // Watch for new grids and add delete buttons
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.classList && node.classList.contains("edit-grid")) {
          addDeleteButton(node)
        }
      })
    })
  })

  observer.observe(submittedGridsContainer, { childList: true })

  // Make the function globally available
  window.addDeleteButton = addDeleteButton

  $("body").on("mouseenter", ".submitted-grids .edit-grid", function () {
    const deleteButton = $("<button>").addClass("delete-button").text("Delete")
    $(this).append(deleteButton)
  })

  $("body").on("mouseleave", ".submitted-grids .edit-grid", function () {
    $(this).find(".delete-button").remove()
  })
})
