import Vue from "vue";

Vue.directive('color', {
    bind(el, bind, vnode ) {
        const colorList = {
            textRed: { color: '#ff2200' },
            textBlue: { color: 'blue' },
            textYellow: { color: 'yellow' },
        }

        if(bind.modifiers.textBlue) {
            if( bind.arg === 'background') {
                el.style.background = bind.value;
                el.style.color = colorList.textBlue.color;
            }
        } else {
            if( bind.arg === 'background') {
                el.style.background = bind.value;
            } else {
                el.style.color = bind.value;
            }
        }

    }
})
