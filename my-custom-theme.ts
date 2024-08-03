
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #0433ff 
		"--color-primary-50": "217 224 255", // #d9e0ff
		"--color-primary-100": "205 214 255", // #cdd6ff
		"--color-primary-200": "192 204 255", // #c0ccff
		"--color-primary-300": "155 173 255", // #9badff
		"--color-primary-400": "79 112 255", // #4f70ff
		"--color-primary-500": "4 51 255", // #0433ff
		"--color-primary-600": "4 46 230", // #042ee6
		"--color-primary-700": "3 38 191", // #0326bf
		"--color-primary-800": "2 31 153", // #021f99
		"--color-primary-900": "2 25 125", // #02197d
		// secondary | #ffffff 
		"--color-secondary-50": "255 255 255", // #ffffff
		"--color-secondary-100": "255 255 255", // #ffffff
		"--color-secondary-200": "255 255 255", // #ffffff
		"--color-secondary-300": "255 255 255", // #ffffff
		"--color-secondary-400": "255 255 255", // #ffffff
		"--color-secondary-500": "255 255 255", // #ffffff
		"--color-secondary-600": "230 230 230", // #e6e6e6
		"--color-secondary-700": "191 191 191", // #bfbfbf
		"--color-secondary-800": "153 153 153", // #999999
		"--color-secondary-900": "125 125 125", // #7d7d7d
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #95d460 
		"--color-success-50": "239 249 231", // #eff9e7
		"--color-success-100": "234 246 223", // #eaf6df
		"--color-success-200": "229 244 215", // #e5f4d7
		"--color-success-300": "213 238 191", // #d5eebf
		"--color-success-400": "181 225 144", // #b5e190
		"--color-success-500": "149 212 96", // #95d460
		"--color-success-600": "134 191 86", // #86bf56
		"--color-success-700": "112 159 72", // #709f48
		"--color-success-800": "89 127 58", // #597f3a
		"--color-success-900": "73 104 47", // #49682f
		// warning | #ff8647 
		"--color-warning-50": "255 237 227", // #ffede3
		"--color-warning-100": "255 231 218", // #ffe7da
		"--color-warning-200": "255 225 209", // #ffe1d1
		"--color-warning-300": "255 207 181", // #ffcfb5
		"--color-warning-400": "255 170 126", // #ffaa7e
		"--color-warning-500": "255 134 71", // #ff8647
		"--color-warning-600": "230 121 64", // #e67940
		"--color-warning-700": "191 101 53", // #bf6535
		"--color-warning-800": "153 80 43", // #99502b
		"--color-warning-900": "125 66 35", // #7d4223
		// error | #e32400 
		"--color-error-50": "251 222 217", // #fbded9
		"--color-error-100": "249 211 204", // #f9d3cc
		"--color-error-200": "248 200 191", // #f8c8bf
		"--color-error-300": "244 167 153", // #f4a799
		"--color-error-400": "235 102 77", // #eb664d
		"--color-error-500": "227 36 0", // #e32400
		"--color-error-600": "204 32 0", // #cc2000
		"--color-error-700": "170 27 0", // #aa1b00
		"--color-error-800": "136 22 0", // #881600
		"--color-error-900": "111 18 0", // #6f1200
		// surface | #e0e4e6 
		"--color-surface-50": "250 251 251", // #fafbfb
		"--color-surface-100": "249 250 250", // #f9fafa
		"--color-surface-200": "247 248 249", // #f7f8f9
		"--color-surface-300": "243 244 245", // #f3f4f5
		"--color-surface-400": "233 236 238", // #e9ecee
		"--color-surface-500": "224 228 230", // #e0e4e6
		"--color-surface-600": "202 205 207", // #cacdcf
		"--color-surface-700": "168 171 173", // #a8abad
		"--color-surface-800": "134 137 138", // #86898a
		"--color-surface-900": "110 112 113", // #6e7071
		
	}
}