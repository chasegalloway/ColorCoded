// Simple drag and drop functionality
let draggedGrid = null

function initializeDragAndDrop() {
  console.log("Initializing drag and drop...")

  const submittedGridsContainer = document.getElementById("submitted-grids")
  if (!submittedGridsContainer) {
    console.log("No submitted grids container found")
    return
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
      this.style.opacity = "0.5"
      this.style.cursor = "grabbing"
      e.dataTransfer.effectAllowed = "move"
      e.dataTransfer.setData("text/html", this.outerHTML)
    })

    // Drag end
    grid.addEventListener("dragend", function (e) {
      console.log("Drag ended")
      this.style.opacity = "1"
      this.style.cursor = "grab"
      draggedGrid = null
    })

    // Drag over
    grid.addEventListener("dragover", function (e) {
      e.preventDefault()
      if (draggedGrid && draggedGrid !== this) {
        e.dataTransfer.dropEffect = "move"
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

        // Insert before or after based on mouse position
        if (e.clientX < midX) {
          this.parentNode.insertBefore(draggedGrid, this)
        } else {
          this.parentNode.insertBefore(draggedGrid, this.nextSibling)
        }
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
  })

  submittedGridsContainer.addEventListener("drop", function (e) {
    e.preventDefault()
    console.log("Drop on container")

    if (draggedGrid && e.target === this) {
      // Append to end if dropped on empty space
      this.appendChild(draggedGrid)
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
