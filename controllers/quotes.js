let quotes = [];
let id = 1;

export const getQuotes = (req,res) => {
    res.send(quotes);
}

export const saveQuote = (req,res) =>{
    // console.log(req.body);
    quotes.push(
        {
            quote : req.body.quote,
            sender : req.body.sender,
            id : id++
        }
    )
    res.send(`Quote received and saved from sender ${req.body.sender}`);
}


export const getQuote =(req,res) => {
    
    const resultQuote =  quotes.find((quote) => quote.id === parseInt(req.params.id));

    res.send(resultQuote);
}

export const deleteQuote = (req,res) => {

    quotes = quotes.filter((quote) => quote.id != parseInt(req.params.id));
    res.send(`Quote with id ${req.params.id} deleted.`);
}


export const updateQuote = (req,res) =>{
    const found_quote = quotes.find((quote)=> quote.id === parseInt(req.params.id));
    console.log(found_quote); 
    const {quote, sender} = req.body;
    if(quote){
        found_quote.quote=quote
    }
    if(sender){
        found_quote.sender= sender
    }

    res.send(`Quote with id ${found_quote.id} is updated.`);
}