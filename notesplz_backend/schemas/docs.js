export default {
    type:'document',
    name:'doc',
    title:'Documents',
    fields:[
        {
            type:'string',
            name:'title',
            title:'Title'
        },
        {
            type:'string',
            name:'pid',
            Title:'parent Id',
        },
        {
            type:'file',
            name:'file',
            Title:'File',
        },
        {
            name:"image",
            title:"Image",
            type:"image",
            options:{
                hotspot:true,
            }
        },
        {
            type:'string',
            name:'caption',
            Title:'Caption',
        },
        {
            type:'string',
            name:'paw',
            Title:'Portal Assosiated With',
        },
        ]
}