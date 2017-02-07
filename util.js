const Util = {
  calcDistance: (pos1, pos2) => {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },
  pursuitAngle: (startPos, targetPos, targetMove) => {
    console.log(targetPos);
    console.log(startPos);
    const ratio = (targetPos[0] - startPos[0])/(targetPos[1] - startPos[1]);
    let yVal = Math.sqrt(1 / (Math.pow(ratio, 2) + 1));
    if (targetPos[1] - startPos[1] < 0) {
      yVal = yVal * (-1);
    }
    const xVal = ratio * yVal;
    return [xVal, yVal];
  }
};

module.exports = Util;
