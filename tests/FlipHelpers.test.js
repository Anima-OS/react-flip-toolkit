import { getEasingName, rectInViewport } from "../src/flipHelpers"

Object.defineProperty(window, "innerHeight", {
  value: 100,
  writable: true
})

Object.defineProperty(window, "innerWidth", {
  value: 100,
  writable: true
})

describe("getEasingName", () => {
  it("flippedEase gets priority", () => {
    expect(getEasingName("easeInQuad", "linear")).toBe("easeInQuad")
  })

  it("otherwise, flipperEase wins", () => {
    expect(getEasingName(undefined, "linear")).toBe("linear")
  })

  it("defaults to easeOut if neither FlippedEase or FlipperEase are valid", () => {
    expect(getEasingName("fakeEase", "fakeEase2")).toBe("easeOutExpo")
  })
})

describe("rectInViewport", () => {

  it("returns true if rect is in viewport", () => {
    expect(rectInViewport({ top: 1, bottom: 99, left: 1, right: 99 })).toBe(
      true
    )
  })

  it("if rect isnt in viewport, returns false", () => {
    expect(rectInViewport({ top: 100, bottom: 101, left: 1, right: 99 })).toBe(
      false
    )
    expect(rectInViewport({ top: -1, bottom: 0, left: 1, right: 99 })).toBe(
      false
    )
    expect(rectInViewport({ top: 1, bottom: 99, left: 100, right: 101 })).toBe(
      false
    )
    expect(rectInViewport({ top: 1, bottom: 99, left: -1, right: 0 })).toBe(
      false
    )
  })
})
