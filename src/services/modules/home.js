import yhRequest from "..";
export function getHomePriceData() {
    return yhRequest.get({
        url: '/home/goodprice'
    })
}
export function getHomeHighScoreData() {
    return yhRequest.get({
        url: '/home/highscore'
    })
}
export function getHomeDiscountData() {
    return yhRequest.get({
        url: "/home/discount"
    })
}
export function getHomeHotrecommenddestData() {
    return yhRequest.get({
        url: "/home/hotrecommenddest"
    })
}
export function getHomeLongforData() {
    return yhRequest.get({
        url: "/home/longfor"
    })
}
export function getHomePlusData() {
    return yhRequest.get({
      url: "/home/plus"
    })
  }