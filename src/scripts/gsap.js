import gsap from 'gsap'
import {CustomEase} from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase)

export const gsapCore = gsap
export const tl = gsap.timeline()
export const easingMaterial = CustomEase.create("ease-material", ".4, 0, .2, 1")