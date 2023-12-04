const pages = [
                {page:
                    {
                        pageId:1, question:"Would you like to payoff your debt?",
                        answers:[{answer:"Yes", pageId:1001, score:1},{ answer:"No", pageId:1001, score:-1}]
                    }
                },
                {page:
                    {
                        pageId:1001, question:"Do you already have a secondary source of income",
                        answers:[{answer:"Yes", pageId:1002, score:1},{ answer:"No", pageId:1002,score:-1}]
                    }
                },
                {page:
                    {
                        pageId:1002, question:"Are you ready to level up your financial game? How about diving into the thrilling world of the stock market or putting some money into a CD?",
                        answers:[{answer:"Yes", pageId:1003, score:1},{ answer:"No", pageId:1003,score:-1}]
                    }
                },
                {page:
                    {
                        pageId:1003, question:"When do you envision making the exciting move to finally purchase your own home?",
                        answers:[{answer:"Winter", pageId:1004, score:1},{ answer:"Summer", pageId:1004,score:-1, disableAnswer:0}]
                    }
                },
                {page:
                    {
                        pageId:1004, question:"Are you interested in exploring the opportunities of a foreclosure home, or would you prefer to explore the more traditional options in the housing market?",
                        answers:[{answer:"Foreclosure homes", pageId:null, score:1},{ answer:"Non Foreclosure homes", pageId:null,score:0}]
                    }
                },
                

            ];