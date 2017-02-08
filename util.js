const Util = {
  calcDistance: (pos1, pos2) => {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },
  pursuitAngle: (startPos, targetPos, targetMove) => {
    if (targetPos[1] - startPos[1] === 0) { return [1, 0]; }
    const ratio = (targetPos[0] - startPos[0])/(targetPos[1] - startPos[1]);
    let yVal = Math.sqrt(1 / (Math.pow(ratio, 2) + 1));
    if (targetPos[1] - startPos[1] < 0) {
      yVal = yVal * (-1);
    }
    const xVal = ratio * yVal;
    return [xVal, yVal];
  },
  escapeAngle: (startPos, predatorPos, targetMove) => {
    if (predatorPos[1] - startPos[1] === 0) { return [1, 0]; }
    const ratio = (predatorPos[0] - startPos[0])/(predatorPos[1] - startPos[1]);
    let yVal = Math.sqrt(1 / (Math.pow(ratio, 2) + 1));
    if (predatorPos[1] - startPos[1] > 0) {
      yVal = yVal * (-1);
    }
    const xVal = ratio * yVal * (-1);
    return [xVal, yVal];
  }
};

module.exports = Util;
