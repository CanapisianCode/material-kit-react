import { useEffect } from "react";

// Constants for 3D effect configuration
const SHOW_SIDES = false; // Whether to show side faces
const COLOR_SURFACE = true; // Whether to color the surface
const COLOR_RANDOM = false; // Whether to use random colors
const COLOR_HUE = 190; // Base hue for coloring
const MAX_ROTATION = 180; // Maximum rotation in degrees
const THICKNESS = 20; // Thickness of 3D elements in pixels
const DISTANCE = 10000; // Perspective distance

// Function to generate a random color
function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 50 + Math.floor(Math.random() * 30);
  const lightness = 40 + Math.floor(Math.random() * 30);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Function to calculate the depth of DOM elements
const getDOMDepth = (element) =>
  [...element.children].reduce((max, child) => Math.max(max, getDOMDepth(child)), 0) + 1;

const use3DEffect = () => {
  useEffect(() => {
    const domDepthCache = getDOMDepth(document.body);
    const getColorByDepth = (depth, hue = 0, lighten = 0) =>
      `hsl(${hue}, 75%, ${Math.min(10 + depth * (1 + 60 / domDepthCache), 90) + lighten}%)`;

    const body = document.body;
    // Set up body styles for 3D effect
    body.style.overflow = "visible";
    body.style.transformStyle = "preserve-3d";
    body.style.perspective = DISTANCE;
    const perspectiveOriginX = window.innerWidth / 2;
    const perspectiveOriginY = window.innerHeight / 2;
    body.style.perspectiveOrigin =
      body.style.transformOrigin = `${perspectiveOriginX}px ${perspectiveOriginY}px`;

    // Recursive function to traverse and style DOM elements
    function traverseDOM(parentNode, depthLevel, offsetX, offsetY) {
      for (
        let children = parentNode.childNodes, childrenCount = children.length, i = 0;
        i < childrenCount;
        i++
      ) {
        const childNode = children[i];
        if (!(1 === childNode.nodeType && !childNode.classList.contains("dom-3d-side-face")))
          continue;

        const color = COLOR_RANDOM ? getRandomColor() : getColorByDepth(depthLevel, COLOR_HUE, -5);
        // Apply 3D styling to child node
        Object.assign(childNode.style, {
          transform: `translateZ(${THICKNESS}px)`,
          overflow: "visible",
          backfaceVisibility: "hidden",
          isolation: "auto",
          transformStyle: "preserve-3d",
          backgroundColor: COLOR_SURFACE ? color : getComputedStyle(childNode).backgroundColor,
          willChange: "transform",
        });

        let updatedOffsetX = offsetX;
        let updatedOffsetY = offsetY;
        if (childNode.offsetParent === parentNode) {
          updatedOffsetX += parentNode.offsetLeft;
          updatedOffsetY += parentNode.offsetTop;
        }
        createSideFaces(childNode, color);
        traverseDOM(childNode, depthLevel + 1, updatedOffsetX, updatedOffsetY);
      }
    }

    // Function to create side faces for 3D effect
    function createSideFaces(element, color) {
      if (!SHOW_SIDES) return;

      const width = element.offsetWidth;
      const height = element.offsetHeight;
      const fragment = document.createDocumentFragment();

      const createFace = ({
        width,
        height,
        transform,
        transformOrigin,
        top,
        left,
        right,
        bottom,
      }) => {
        const face = document.createElement("div");
        face.className = "dom-3d-side-face";
        Object.assign(face.style, {
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          position: "absolute",
          width: `${width}px`,
          height: `${height}px`,
          background: color,
          transform,
          transformOrigin,
          overflow: "hidden",
          willChange: "transform",
          top,
          left,
          right,
          bottom,
        });
        fragment.appendChild(face);
      };

      // Create top, right, bottom, and left faces
      createFace({
        width,
        height: THICKNESS,
        transform: `rotateX(-270deg) translateY(${-THICKNESS}px)`,
        transformOrigin: "top",
        top: "0px",
        left: "0px",
      });
      createFace({
        width: THICKNESS,
        height,
        transform: "rotateY(90deg)",
        transformOrigin: "left",
        top: "0px",
        left: `${width}px`,
      });
      createFace({
        width,
        height: THICKNESS,
        transform: `rotateX(-90deg) translateY(${THICKNESS}px)`,
        transformOrigin: "bottom",
        bottom: "0px",
        left: "0px",
      });
      createFace({
        width: THICKNESS,
        height,
        transform: `translateX(${-THICKNESS}px) rotateY(-90deg)`,
        transformOrigin: "right",
        top: "0px",
        left: "0px",
      });

      element.appendChild(fragment);
    }

    // Start the 3D effect traversal
    traverseDOM(body, 0, 0, 0);

    // Flag to control the rotation effect
    let isRightButtonDown = false;

    // Function to handle mouse movement for rotation
    const handleMouseMove = (event) => {
      if (!isRightButtonDown) return;
      const rotationY = MAX_ROTATION * (1 - event.clientY / window.innerHeight) - MAX_ROTATION / 2;
      const rotationX = (MAX_ROTATION * event.clientX) / window.innerWidth - MAX_ROTATION / 2;
      body.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg)`;
    };

    // Function to handle right mouse button down
    const handleMouseDown = (event) => {
      if (event.button === 2) {
        // 2 represents the right mouse button
        isRightButtonDown = true;
        document.addEventListener("mousemove", handleMouseMove);
      }
    };

    // Function to handle mouse button release
    const handleMouseUp = () => {
      isRightButtonDown = false;
      document.removeEventListener("mousemove", handleMouseMove);
    };

    // Add event listeners
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup function for removing the event listeners
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};

export default use3DEffect;
