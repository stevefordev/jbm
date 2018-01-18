var utils = {
    /**
     }
     * 입력받은 시작 값과 총 숫자 갯수 중에서 랜덤하게
     * 선택하려 회신 준다
     *
     * @param start 시작 숫자
     * @param size 숫자 갯수
     * @returns {number}
     */
    getRandomNum: function (start, size) {
        return Math.floor(Math.random() * size) + start;
    },
    /**
     * 랜덥하게 컬러 한가지 색상을 리턴 준다
     * @returns {string} ex ) rgb( 0,0,0)"
     */
    getRandomColor: function () {
        var r = utils.getRandomNum(0, 256);
        var g = utils.getRandomNum(0, 256);
        var b = utils.getRandomNum(0, 256);
        var color = "rgb(" + r + "," + g + "," + b + ")";
        console.log("color:" + color);
        return color;
    }
}