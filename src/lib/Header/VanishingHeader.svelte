<script>
    import { createEventDispatcher } from 'svelte';
    import validate from './Validation';
    import { onMount } from 'svelte';
    import {cart, user} from '$lib/Store';


    export let duration = '200ms';
	export let offset = 0;
    export let tolerance = 0;

    let headerClass = 'showH';
    let lastHeaderClass = 'showH';
    let y = 0;
	let lastY = 0;
  

    
    onMount(async () => {
        const module = (function(){
        let mouseY;
        document.onmousemove = handleMouseMove;
        setInterval(getMousePosition, 100);
        function handleMouseMove(event){
            let eventDoc, doc, body;

            event = event || window.event; // IE-ism

            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;
            }
            mouseY = event.clientY
        }
        function getMousePosition() {
            const y = mouseY;
            if(y < 100){
                headerClass = 'showH';
            }
        }
    })();
});
    const dispatch = createEventDispatcher();


	function setTransitionDuration(node) {
		node.style.transitionDuration = duration;
	}
	
	function updateClass(y = 0){
		const dy = lastY - y;
        let result = deriveClass(y, dy);
		lastY = y;
		return result;
	}
	function deriveClass(y = 0, dy = 0){
		if(y < offset){
			return 'showH';
            
		}
        if (!dy || Math.abs(dy) < tolerance) {
            return headerClass;
        }
        const dir = dy < 0 ? 'down' : 'up'; 
        if (dir === "up"){
            $cart = false;
            $user = false;
            return 'hideH';

        } 
        if (dir === "down"){
            $cart = false;
            $user = false;
            return 'hideH';
        }
        if (dy === 0) return 'showH';
        return headerClass;
	}
    $: {
        validate({duration, offset, tolerance});
        headerClass = updateClass(y);
        if (headerClass !== lastHeaderClass) {
            dispatch(headerClass);
        }
        lastHeaderClass = headerClass;
    }
    
</script>

<svelte:window bind:scrollY={y}/>
<div use:setTransitionDuration class={headerClass} >
    <slot />
</div>


<style>
    div{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 130px;
        margin: 0;
        position: fixed;
        top: 0;
        background-color: #282A28;
        transition: transform 300ms linear;
        z-index: 2;
    }
</style>