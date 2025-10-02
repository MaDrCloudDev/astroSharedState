declare module 'solid-js/jsx-runtime' {
	export namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any;
		}
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any;
		}
	}
}
