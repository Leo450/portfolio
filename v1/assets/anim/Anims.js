class Anims
{

    constructor(elems)
    {

        this.elems = elems;

    }

    fadeIn()
    {

        this.elems.core
            .css('top', '25%')
            .fadeIn(AnimTools.unqueue({duration: 5000, easing: 'easeInQuad'}))
            .transition({top: '50%'}, AnimTools.unqueue(5000), 'easeOutQuad');
        this.elems.coreLight
            .css('top', '25%')
            .fadeIn(AnimTools.unqueue({duration: 5000, easing: 'easeInQuad'}))
            .transition({top: '50%'}, AnimTools.unqueue(5000), 'easeOutQuad');

        this.elems.coreBG
            .fadeIn(7000);

        setTimeout(() => {
            this.elems.letterE
                .css({transform: 'translateX(-290%) translateY(-50%)'})
                .fadeIn(AnimTools.unqueue({duration: 3000, easing: 'easeOutQuad'}))
                .transition({transform: 'translateX(-190%) translateY(-50%)'}, AnimTools.unqueue({duration: 2000, easing: 'easeOutQuad'}));
        }, 3000);
        setTimeout(() => {
            this.elems.letterL
                .css({transform: 'translateX(-560%) translateY(-50%)'})
                .fadeIn(AnimTools.unqueue({duration: 3000, easing: 'easeOutQuad'}))
                .transition({transform: 'translateX(-460%) translateY(-50%)'}, AnimTools.unqueue({duration: 2000, easing: 'easeOutQuad'}));
        }, 3500);

        setTimeout(() => {
            this.elems.coreDot1.transition({marginTop: '3.5vw'}, {duration: 1000, easing: 'easeOutCubic'});
            this.elems.coreDot2.transition({marginTop: '4.5vw'}, {duration: 2000, easing: 'easeOutCubic'});
            this.elems.coreDot3.transition({marginTop: '5.5vw'}, {duration: 3000, easing: 'easeOutCubic'});
            this.elems.coreDot4.transition({marginTop: '6.5vw'}, {duration: 4000, easing: 'easeOutCubic'});
        }, 4500);

        setTimeout(() => {
            this.elems.baseline.fadeIn(3000);
        }, 7000);

        setTimeout(() => {
            this.elems.line.transition({width: '61vw'}, {duration: 1000, easing: 'easeInOutQuad'})
            this.elems.menu.fadeIn(1000);
        }, 8500);

    }

}