class AnimApp
{

    run()
    {

        this.init();

        this.Anims.fadeIn();

    }

    init()
    {

        this.loadElems();
        this.initElems();

        this.Anims = new Anims(this.elems);

    }

    loadElems()
    {

        this.elems = {
            core: $('.core'),
            coreBG: $('.core-bg'),
            coreLight: $('.core-light'),
            letterL: $('.letter-l'),
            letterE: $('.letter-e'),
            coreDot1: $('.core-dots .core-dot:nth-child(1)'),
            coreDot2: $('.core-dots .core-dot:nth-child(2)'),
            coreDot3: $('.core-dots .core-dot:nth-child(3)'),
            coreDot4: $('.core-dots .core-dot:nth-child(4)'),
            baseline: $('.baseline'),
            line: $('.line'),
            menu: $('.menu')
        };

    }

    initElems()
    {

        this.elems.core.hide();
        this.elems.coreBG.hide();
        this.elems.coreLight.hide();
        this.elems.letterL.hide();
        this.elems.letterE.hide();
        this.elems.baseline.hide();
        this.elems.menu.hide();

    }

}