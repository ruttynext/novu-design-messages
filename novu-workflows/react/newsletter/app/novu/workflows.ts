import { workflow } from "@novu/framework";
import { renderStackReactEmail } from "./emails/newsletter_stackoverflow";


export const stackWorkflow = (
  workflow(
    "stack overflow",
    async ({ step }) => {
      await step.email(
        "send-email",
        async (inputs) => {
          return {
            subject: `This is an email subject for`,
            body: renderStackReactEmail(inputs),
          };
        },
        {
          inputSchema: {
            type: "object",
  
            properties: {
              headerImage: {
                type: "string",
                title: "Header Logo",
                default: "Logo 1",
                enum: ["Logo 1", "Logo 2"]
              },    
              headerHeader: { 
                type: "string", 
                title: "Header 1", 
                default: "Find what you want, faster"
              },      
              headerMessage: { 
                type: "string", 
                title: "Text 1", 
                default: "Tips and tricks for searching on Stack Overflow"
              },  
              searchForSolutionsHeader: { 
                type: "string", 
                title: "Header 2", 
                default: "Stack overflow tips for searching"
              },
              searchForSolutions: { 
                type: "string", 
                title: "Text 2",
                default: "With more than 18 million questions, it's possible that someone has already provided a solution to the problem you're facing."
              },
             
              searchBarHeader: { 
                type: "string", 
                title: "Header 3", 
                default: "Use the search bar at the top of the page to find what you need"
              },
              searchBarPrompt: { 
                type: "string", 
                title: "Text 3", 
                default: "Here are a few simple search tips to get you started:"
              },
              searchBar: { 
                type: "array",
                title: "Text Fields",
                items: {
                  type: "string",
                  default: "Item 1",
                  enum: ["Item 1", "Item 2", "Item 3"]
                }
              }, 
              searchBarMessage: { 
                type: "string", 
                title: "Item 1", 
                default: "The more information you can put in the search bar, the more likely you will be to either find the answer you need or feel confident that no one else has asked the question before."
              },
              searchBarMessage2: { 
                type: "string", 
                title: "Item 2", 
                default: "Think of key words that are related to the problem and hack away."
              },
              searchBarMessage3: { 
                type: "string", 
                title: "Item 3", 
                default: "Dont add too many details as to overpopulate the search query"
              },
              takeBreak: { 
                type: "string", 
                title: "Header 4", 
                default: "Take a break and read about the worst coder in the world"
              },
              takeBreakUrl: {
                type: "string",
                title: "Button URL",
                default: "https://stackoverflow.blog/2019/10/22/",
                format: "uri",
              },
              showButton: { 
                type: "boolean", 
                title: "Button", 
                default: true 
              },
              buttonMessage: { 
                type: "string", 
                title: "Button Text", 
                default: "I need a break"
              }
            },
          },
        },
      );
    
    },
  )
)
