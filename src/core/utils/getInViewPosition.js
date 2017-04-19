const margin = 8;

const getInViewPosition = (element, position, directions) => {
  let { top, left, right, bottom, width, height } = position;
  const computedStyle = getComputedStyle(element);

  const topMargin = margin + Math.abs(parseInt(computedStyle.marginTop, 10));
  const leftMargin = margin + Math.abs(parseInt(computedStyle.marginLeft, 10));
  const rightMargin = margin + Math.abs(parseInt(computedStyle.marginRight, 10));
  const bottomMargin = margin + Math.abs(parseInt(computedStyle.marginBottom, 10));

  const topSpace = directions.includes('top') ? top + height - parseInt(computedStyle.height, 10) : top;
  const leftSpace = directions.includes('left') ? left + width - parseInt(computedStyle.width, 10) : left;
  const rightSpace = directions.includes('right') ? right + width - parseInt(computedStyle.width, 10) : right;
  const bottomSpace = directions.includes('bottom') ? bottom + height - parseInt(computedStyle.height, 10) : bottom;

  const newTopPos = position.top - Math.abs(bottomSpace) - topMargin;
  const newLeftPos = position.left - Math.abs(rightSpace) - leftMargin;
  const newRightPos = position.right - Math.abs(leftSpace) - rightMargin;
  const newBottomPos = position.bottom - Math.abs(topSpace) - bottomMargin;

  if (leftSpace < leftMargin) {
    position.left = leftMargin;
    position.right = position.right > rightMargin && position.right > Math.abs(leftSpace) ? newRightPos : rightMargin;
  }

  if (rightSpace < rightMargin) {
    position.right = rightMargin;
    position.left = position.left > leftMargin && position.left > Math.abs(rightSpace) ? newLeftPos : leftMargin;
  }

  if (topSpace < topMargin) {
    position.top = topMargin;
    position.bottom = position.bottom > bottomMargin && position.bottom > Math.abs(topSpace) ? newBottomPos : bottomMargin;
  }

  if (bottomSpace < bottomMargin) {
    position.bottom = bottomMargin;
    position.top = position.top > topMargin && position.top > Math.abs(bottomSpace) ? newTopPos : topMargin;
  }

  if (window.innerWidth <= position.width + leftMargin + rightMargin) {
    position.width = 0;
  }

  return position;
};

export default getInViewPosition;
