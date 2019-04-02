class AnimTools
{

    static unqueue(options)
    {

        if(Number.isInteger(options)){
            return {duration: options, queue: false};
        }else if(typeof options === 'object'){
            options.queue = false;
            return options;
        }

        throw new Error("Argument given to 'AnimTools.unqueue' must be integer or object.");

    }

}