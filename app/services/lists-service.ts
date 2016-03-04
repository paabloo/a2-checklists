/**
 * @Service
 * @description
 * Get lists json.
 */
import {Inject, Injectable} from "angular2/core";
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
@Injectable()
export class ListsService {
    // lists =
    // [
    //     {
    //         "id": 1,
    //         "name": "PSD to HTML",
    //         "beforeStart": "THESE ARE MERELY SUGGESTIONS FOR YOUR WORKFLOW. FEEL FREE TO CONTRIBUTE ON GITHUB OR MAKE A FORK AND CREATE YOUR OWN UNIQUE WORKFLOW CHECKLIST. THIS LIST IS MEANT FOR VISUAL DESIGNERS WORKING WITHIN A TEAM SETTING WHERE VISUAL COMPS AND EXPLORATION WILL BE SHARED WITH A DEVELOPER. CHECKBOXES ARE PERSISTENT (THEY WON'T UNCHECK ON REFRESH) WHERE LOCALSTORAGE IS SUPPORTED.",
    //         "lists": [
    //             {
    //                 "name": "Package with design and design related files",
    //                 "questions": [
    //                     {
    //                         "label": "HAVE YOU INCLUDED JPG FILES FOR ALL PAGES (HOME PAGE) AND ALL PAGE VARIANTS (HOME PAGE POPUP, FILTERS OPENED, MENU EXPANDED)?"
    //                     },
    //                     {
    //                         "label": "HAVE YOU INCLUDED JPG AND PSD FILES FOR DESKTOP, TABLET AND SMARTPHONE IF PROJECT REQUIRES TO DO RWD?"
    //                     },
    //                     {
    //                         "label": "HAVE YOU INCLUDED PSD FILES COVERING ALL THE PAGES AND PAGE VARIANTS INCLUDING RWD VERSION?"
    //                     },
    //                     {
    //                         "label": "DO YOU HAVE NAMING CONVENTION FOR PSD AND JPG (IF PAGE NAMED ABOUT YOU SHOULD NAME PSD “ABOUT_VOL-6.PSD”)?"
    //                     },
    //                     {
    //                         "label": "HAVE YOU INCLUDED ALL WEB FONTS IN ALL NEEDED FORMATS: .TTF, .EOT, .WOFF, .SVG, .OTF?"
    //                     },
    //                     {
    //                         "label": "HAVE YOU SENT THE LATEST VERSION OF THE FILES WITHOUT DUPLICATES OR OUTDATED VERSIONS?"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "PSD quality",
    //                 "questions": [
    //                     {
    //                         "label": "Are you naming your layers / folders properly (logo - hover instead of layer2)?"
    //                     },
    //                     {
    //                         "label": "Are you using and sticking to grid (unified columns, paddings and margins)?"
    //                     },
    //                     {
    //                         "label": "Have you removed all unused layers / folders?"
    //                     },
    //                     {
    //                         "label": "Are you grouping your layers (header, footer…)?"
    //                     },
    //                     {
    //                         "label": "Have you provided hover examples?"
    //                     },
    //                     {
    //                         "label": "Have you gotten rid of blending modes in your PSD?"
    //                     },
    //                     {
    //                         "label": "Have you sent files in good resolution and quality (with Retina support)?"
    //                     },
    //                     {
    //                         "label": "Are you familliar with <a href=\"http://photoshopetiquette.com\" target=\"_blank\">http://photoshopetiquette.com</a>?"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 2,
    //         "name": "Web standards checklist",
    //         "beforeStart": "Some info, displayed the beggining.",
    //         "lists": [
    //             {
    //                 "name": "Quality of code",
    //                 "questions": [
    //                     {
    //                         "label": "Does the site use a correct Doctype?"
    //                     },
    //                     {
    //                         "label": "Does the site use a Character set?"
    //                     },
    //                     {
    //                         "label": "Does the site use Valid HTML?"
    //                     },
    //                     {
    //                         "label": "Does the site use Valid CSS?"
    //                     },
    //                     {
    //                         "label": "Does the site use any CSS hacks?"
    //                     },
    //                     {
    //                         "label": "Does the site use unnecessary classes or ids?"
    //                     },
    //                     {
    //                         "label": "Is the code well structured?"
    //                     },
    //                     {
    //                         "label": "Does the site have any broken links?"
    //                     },
    //                     {
    //                         "label": "How does the site perform in terms of speed/page size?"
    //                     },
    //                     {
    //                         "label": "Does the site have JavaScript errors?"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "Degree of separation between content and presentation",
    //                 "questions": [
    //                     {
    //                         "label": "Does the site use CSS for all presentation aspects (fonts, colour, padding, borders etc)?"
    //                     },
    //                     {
    //                         "label": "Are all decorative images in the CSS, or do they appear in the (X)HTML?"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "Accessibility for users",
    //                 "questions": [
    //                     {
    //                         "label": "Are “alt” attributes used for all descriptive images?"
    //                     },
    //                     {
    //                         "label": "Does the site use relative units rather than absolute units for text size?"
    //                     },
    //                     {
    //                         "label": "Does the site use visible skip menus?"
    //                     },
    //                     {
    //                         "label": "Does the site use accessible forms?"
    //                     },
    //                     {
    //                         "label": "Does the site use accessible tables?"
    //                     },
    //                     {
    //                         "label": "Is there sufficient colour brightness/contrasts?"
    //                     },
    //                     {
    //                         "label": "Is colour alone used for critical information?"
    //                     },
    //                     {
    //                         "label": "Is there delayed responsiveness for dropdown menus (for users with reduced motor skills)?"
    //                     },
    //                     {
    //                         "label": "Are all links descriptive (for blind users)?"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "Accessibility for devices",
    //                 "questions": [
    //                     {
    //                         "label": "Does the site work acceptably across modern and older browsers?"
    //                     },
    //                     {
    //                         "label": "Is the content accessible with CSS switched off or not supported?"
    //                     },
    //                     {
    //                         "label": "Is the content accessible with images switched off or not supported?"
    //                     },
    //                     {
    //                         "label": "Does the site work in text browsers such as Lynx?"
    //                     },
    //                     {
    //                         "label": "Does the site work well when printed?"
    //                     },
    //                     {
    //                         "label": "Does the site work well in Hand Held devices?"
    //                     },
    //                     {
    //                         "label": "Does the site include detailed metadata?"
    //                     },
    //                     {
    //                         "label": "Does the site work well in a range of browser window sizes?"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "Basic Usability",
    //                 "questions": [
    //                     {
    //                         "label": "Is there a clear visual hierarchy?"
    //                     },
    //                     {
    //                         "label": "Are heading levels easy to distinguish?"
    //                     },
    //                     {
    //                         "label": "Is the site’s navigation easy to understand?"
    //                     },
    //                     {
    //                         "label": "Is the site’s navigation consistent?"
    //                     },
    //                     {
    //                         "label": "Does the site use consistent and appropriate language?"
    //                     },
    //                     {
    //                         "label": "Does the site have a sitemap page and contact page? Are they easy to find?"
    //                     },
    //                     {
    //                         "label": "For large sites, is there a search tool?"
    //                     },
    //                     {
    //                         "label": "Is there a link to the home page on every page in the site?"
    //                     },
    //                     {
    //                         "label": "Are links underlined?"
    //                     },
    //                     {
    //                         "label": "Are visited links clearly defined?"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "Site management",
    //                 "questions": [
    //                     {
    //                         "label": "Does the site have a meaningful and helpful 404 error page that works from any depth in the site?"
    //                     },
    //                     {
    //                         "label": "Does the site use friendly URLs?"
    //                     },
    //                     {
    //                         "label": "Do your URLs work without “www”?"
    //                     },
    //                     {
    //                         "label": "Does the site have a favicon?"
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         "id": 3,
    //         "name": "ScrumMaster's Checklist",
    //         "beforeStart": "Some info, displayed the beggining.",
    //         "lists": [
    //             {
    //                 "name": "How is my Product Owner doing?",
    //                 "questions": [
    //                     {
    //                         "label": "Is the Product Backlog prioritized according to his/her latest thinking?"
    //                     },
    //                     {
    //                         "label": "Are all the requirements and desirements from all stakeholders for the product captured in the backlog? "
    //                     },
    //                     {
    //                         "label": "Is the Product Backlog a manageable size?"
    //                     },
    //                     {
    //                         "label": "Could any requirements (especially those near the top of the Product Backlog) be better expressed as independent, negotiable, valuable, estimable, small, and testable user stories?"
    //                     },
    //                     {
    //                         "label": "Have you educated your Product Owner about technical debt and how to avoid it?"
    //                     },
    //                     {
    //                         "label": "Is the backlog an information radiator, clearly visible to all stakeholders?"
    //                     },
    //                     {
    //                         "label": "If you're using an automated tool for backlog management, is it actually working for you?"
    //                     },
    //                     {
    //                         "label": "Can you help radiate by showing everyone printouts?"
    //                     },
    //                     {
    //                         "label": "Can you help radiate by creating big visible charts?"
    //                     },
    //                     {
    //                         "label": "Have you helped your Product Owner organize backlog items into appropriate releases (e.g., front burner, back burner, fridge)?"
    //                     },
    //                     {
    //                         "label": "Do all stakeholders (including the team) know whether the release plan still matches reality, based on the current velocity (e.g., story points per Sprint)?"
    //                     },
    //                     {
    //                         "label": "Did your Product Owner adjust the release plan after the last Sprint Review Meeting?"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "How is my team doing?",
    //                 "questions": [
    //                     {
    //                         "label": "Are team members spending most of their time in the state of flow?"
    //                     },
    //                     {
    //                         "label": "Do team members seem to like each other, goof off together, and celebrate each other's success?"
    //                     },
    //                     {
    //                         "label": "Do team members hold each other accountable to high standards, and challenge each other to grow?"
    //                     },
    //                     {
    //                         "label": "Are there issues/opportunities the team isn't discussing because they're too uncomfortable?"
    //                     },
    //                     {
    //                         "label": "Have you tried a variety of formats and locations for Sprint Retrospective Meetings?"
    //                     },
    //                     {
    //                         "label": "Has the team kept focus on acceptance criteria?"
    //                     },
    //                     {
    //                         "label": "Does the Sprint Backlog reflect what the team is actually doing?"
    //                     },
    //                     {
    //                         "label": "Are your team's task estimates and/or your taskboard up to date?"
    //                     },
    //                     {
    //                         "label": "Are the team self-management artifacts (taskboard, Sprint Burndown Chart, etc.) visible to the team, convenient for the team to use?"
    //                     },
    //                     {
    //                         "label": "Are the team self-management artifacts adequately protected from micromanagers?"
    //                     },
    //                     {
    //                         "label": "Do team members volunteer for tasks?"
    //                     },
    //                     {
    //                         "label": "Are technical debt repayment items (to address issues sapping your team's velocity) captured in the backlog, or otherwise communicated with the Product Owner?"
    //                     },
    //                     {
    //                         "label": "Are team members leaving their job titles outside the team room?"
    //                     },
    //                     {
    //                         "label": "Does the entire team consider itself collectively responsible for testing, user documentation, etc.?"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "How is the organization doing?",
    //                 "questions": [
    //                     {
    //                         "label": "Is the appropriate amount of inter-team coordination happening?"
    //                     },
    //                     {
    //                         "label": "Is the inter-team coordination done by the people with their hands dirty in the work, as recommended?"
    //                     },
    //                     {
    //                         "label": "Are your ScrumMasters meeting with each other, working the organizational impediments list?"
    //                     },
    //                     {
    //                         "label": "When appropriate, are the organizational impediments pasted to the wall of the development director's office?"
    //                     },
    //                     {
    //                         "label": "Is your organization one of the few with career paths compatible with the collective goals of your teams?"
    //                     },
    //                     {
    //                         "label": "Are you helping to create a learning organization?"
    //                     },
    //                     {
    //                         "label": "Has your organization been recognized by the trade press or other independent sources as one of the best places to work or a leader in your industry?"
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ];

    lists: any

    constructor(@Inject(Http) http: Http) {
        this.lists = http.get('/app/json/checklist.json')
          .map(response => response.json());
    }

}
