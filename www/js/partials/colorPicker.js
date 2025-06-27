export let pickrAddClass;
export let pickrInnerClass;
export const defaultColor = '#1F1F1F';

export function addClassPickr() {
// ================= PICKER ADDCLASS ======================
    pickrAddClass = Pickr.create({
        el: '#color-picker',
        theme: 'nano', // or 'monolithx', or 'nano'
        default: defaultColor,
        swatches: null,

        components: {

            // Main components
            preview: true,
            hue: true,

            // Input / output Options
            interaction: {
                input: true,
            }
        }
    });

    pickrAddClass.on('change', (color, instance) => {
        const resultCoverColor = color.toHEXA().toString();
        document.getElementById('coverAddClass').style.backgroundColor = resultCoverColor;
    })

    document.getElementById('button-changeCover-addClass').addEventListener('click', () => {
        pickrAddClass.show();
    });
}


export function innerClassPickr(){
// ================= PICKER INNERCLASS ======================
    pickrInnerClass = Pickr.create({
        el: '#color-picker',
        theme: 'nano', // or 'monolithx', or 'nano'

        components: {

            // Main components
            preview: true,
            hue: true,

            // Input / output Options
            interaction: {
                input: true,
                save: true,
            }
        }
    });

    pickrInnerClass.on('change', (color, instance) => {
        const resultCoverColor = color.toHEXA().toString();
        document.getElementById('coverInnerClass').style.backgroundColor = resultCoverColor;
    })

    document.getElementById('button-changeCover-innerClass').addEventListener('click', () => {
        pickrInnerClass.show();
    });

}
