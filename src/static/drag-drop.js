// Simple drag and drop functionality with visual drop indicator
let draggedGrid = null
let dropIndicator = null

function initializeDragAndDrop() {
  console.log("Initializing drag and drop...")

  const submittedGridsContainer = document.getElementById("submitted-grids")
  if (!submittedGridsContainer) {
    console.log("No submitted grids container found")
    return
  }

  // Create drop indicator line
  function createDropIndicator() {
    const indicator = document.createElement("div")
    indicator.className = "drop-indicator"
    indicator.style.cssText = `
      width: 3px;
      height: 80px;
      background: linear-gradient(to bottom, #007acc, #0099ff);
      border-radius: 2px;
      box-shadow: 0 0 8px rgba(0, 122, 204, 0.6);
      opacity: 0.8;
      transition: all 0.2s ease;
      pointer-events: none;
      position: relative;
      margin: 0 6px;
    `

    // Add glowing effect
    const glow = document.createElement("div")
    glow.style.cssText = `
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: rgba(0, 122, 204, 0.3);
      border-radius: 4px;
      filter: blur(2px);
      z-index: -1;
    `
    indicator.appendChild(glow)

    return indicator
  }

  // Function to make a single grid draggable
  function makeDraggable(grid) {
    console.log("Making grid draggable:", grid)

    // Set draggable attribute
    grid.setAttribute("draggable", "true")
    grid.style.cursor = "grab"

    // Add visual indicator
    grid.style.position = "relative"

    // Drag start
    grid.addEventListener("dragstart", function (e) {
      console.log("Drag started on:", this)
      draggedGrid = this
      this.style.opacity = "0.6"
      this.style.cursor = "grabbing"
      this.classList.add("dragging")

      // Create drop indicator
      dropIndicator = createDropIndicator()

      e.dataTransfer.effectAllowed = "move"
      e.dataTransfer.setData("text/html", this.outerHTML)
    })

    // Drag end
    grid.addEventListener("dragend", function (e) {
      console.log("Drag ended")
      this.style.opacity = "1"
      this.style.cursor = "grab"
      this.classList.remove("dragging")

      // Remove drop indicator
      if (dropIndicator && dropIndicator.parentNode) {
        dropIndicator.parentNode.removeChild(dropIndicator)
      }
      dropIndicator = null
      draggedGrid = null
    })

    // Drag over
    grid.addEventListener("dragover", function (e) {
      e.preventDefault()
      if (draggedGrid && draggedGrid !== this) {
        e.dataTransfer.dropEffect = "move"

        // Show drop indicator
        const rect = this.getBoundingClientRect()
        const midX = rect.left + rect.width / 2

        // Remove existing indicator
        if (dropIndicator && dropIndicator.parentNode) {
          dropIndicator.parentNode.removeChild(dropIndicator)
        }

        // Insert indicator before or after based on mouse position
        if (e.clientX < midX) {
          this.parentNode.insertBefore(dropIndicator, this)
        } else {
          this.parentNode.insertBefore(dropIndicator, this.nextSibling)
        }
      }
    })

    // Drop
    grid.addEventListener("drop", function (e) {
      e.preventDefault()
      console.log("Drop on grid")

      if (draggedGrid && draggedGrid !== this) {
        // Get the bounding rectangle of the target
        const rect = this.getBoundingClientRect()
        const midX = rect.left + rect.width / 2

        // Remove drop indicator
        if (dropIndicator && dropIndicator.parentNode) {
          dropIndicator.parentNode.removeChild(dropIndicator)
        }

        // Insert before or after based on mouse position
        if (e.clientX < midX) {
          this.parentNode.insertBefore(draggedGrid, this)
        } else {
          this.parentNode.insertBefore(draggedGrid, this.nextSibling)
        }

        // Add success animation
        draggedGrid.style.animation = "dropSuccess 0.4s ease"
        setTimeout(() => {
          if (draggedGrid) {
            draggedGrid.style.animation = ""
          }
        }, 400)
      }
    })

    // Hover effects
    grid.addEventListener("mouseenter", function () {
      if (!draggedGrid) {
        this.style.transform = "scale(1.05)"
      }
    })

    grid.addEventListener("mouseleave", function () {
      if (!draggedGrid) {
        this.style.transform = "scale(1)"
      }
    })
  }

  // Make container droppable
  submittedGridsContainer.addEventListener("dragover", (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"

    // Show drop indicator at end if dragging over empty space
    if (draggedGrid && e.target === submittedGridsContainer) {
      // Remove existing indicator
      if (dropIndicator && dropIndicator.parentNode) {
        dropIndicator.parentNode.removeChild(dropIndicator)
      }

      // Add indicator at the end
      submittedGridsContainer.appendChild(dropIndicator)
    }
  })

  submittedGridsContainer.addEventListener("drop", function (e) {
    e.preventDefault()
    console.log("Drop on container")

    if (draggedGrid && e.target === this) {
      // Remove drop indicator
      if (dropIndicator && dropIndicator.parentNode) {
        dropIndicator.parentNode.removeChild(dropIndicator)
      }

      // Append to end if dropped on empty space
      this.appendChild(draggedGrid)

      // Add success animation
      draggedGrid.style.animation = "dropSuccess 0.4s ease"
      setTimeout(() => {
        if (draggedGrid) {
          draggedGrid.style.animation = ""
        }
      }, 400)
    }
  })

  // Handle drag leave to remove indicator when leaving container
  submittedGridsContainer.addEventListener("dragleave", (e) => {
    // Only remove if we're leaving the container entirely
    if (!submittedGridsContainer.contains(e.relatedTarget)) {
      if (dropIndicator && dropIndicator.parentNode) {
        dropIndicator.parentNode.removeChild(dropIndicator)
      }
    }
  })

  // Make all existing grids draggable
  const existingGrids = submittedGridsContainer.querySelectorAll(".edit-grid")
  console.log("Found existing grids:", existingGrids.length)
  existingGrids.forEach(makeDraggable)

  // Watch for new grids being added
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.classList && node.classList.contains("edit-grid")) {
          console.log("New grid detected, making draggable")
          makeDraggable(node)
        }
      })
    })
  })

  observer.observe(submittedGridsContainer, { childList: true })

  // Make the function globally available
  window.makeDraggable = makeDraggable
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeDragAndDrop)
} else {
  initializeDragAndDrop()
}
