import gsap from 'gsap'
import {CustomEase} from 'gsap/CustomEase';
import {CSSRulePlugin} from 'gsap/CSSRulePlugin';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(CustomEase, CSSRulePlugin, ScrollTrigger);

export const gsapCore = gsap
export const tl = gsap.timeline()
export const easingMaterial = CustomEase.create("ease-material", ".4, 0, .2, 1")
export const CssRulePlugin = CSSRulePlugin