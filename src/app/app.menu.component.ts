import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="menu-scroll-content">
			<ul class="navigation-menu">
				<li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
			</ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    public model: any[];

    constructor(public app: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            { label: 'Dashboard', icon: 'dashboard', routerLink: ['/'] },
            {
                label: 'User Management', icon: 'people',
                items: [
                    { label: 'Basic Users', icon: 'tune', routerLink: ['/user/basic'] },
                    { label: 'Business Users', icon: 'tune', badge: '1', routerLink: ['/user/business'] },
                ]
            },
            {
                label: 'Product Management', icon: 'subject',
                items: [
                    {
                        label: 'B2C Products', icon: 'subject',
                        items: [
                            { label: 'Mobile Phones', icon: 'tune', routerLink: ['/mobiles'] },
                            { label: 'Accessories', icon: 'tune', routerLink: ['/accessories'] },
                        ]
                    },
                    {
                        label: 'B2B Products', icon: 'subject',
                        items: [
                            { label: 'Hardware Parts', icon: 'tune', routerLink: ['/hardware-parts'] },
                        ]
                    },
                    {
                        label: 'Product Properties', icon: 'subject',
                        items: [
                            { label: 'Product Tags', icon: 'tune', routerLink: ['/tags'] },
                            { label: 'Brand Options', icon: 'tune', routerLink: ['/brands'] },
                            { label: 'Ram Memory Options', icon: 'tune', routerLink: ['/ram-memories'] },
                            { label: 'Storage Options', icon: 'tune', routerLink: ['/storages'] },
                            { label: 'Connectivity Options', icon: 'tune', routerLink: ['/connectivities'] },
                            { label: 'Sim-Card Options', icon: 'tune', routerLink: ['/simcardslots'] },
                            { label: 'Color Options', icon: 'tune', routerLink: ['/colors'] },
                        ]
                    },
                ]
            },

            {
                label: 'Repair Management', icon: 'subject',
                items: [
                    {
                        label: 'Configuration', icon: 'subject',
                        items: [
                            { label: 'Branches', icon: 'tune', routerLink: ['/branches'] },
                            { label: 'Device Brands', icon: 'tune', routerLink: ['/devicebrands'] },
                            { label: 'Device Models', icon: 'tune', routerLink: ['/devicemodels'] },
                            { label: 'Problems', icon: 'tune', routerLink: ['/problems'] },
                            { label: 'Mobile Problems', icon: 'tune', routerLink: ['/deviceproblemclassifications'] },
                        ]
                    },
                    { label: 'Repair Requests', icon: 'tune', badge: '1', routerLink: ['/repair-requests/list'] },
                ]
            },

            {
                label: 'Display', icon: 'palette', badge: '5',
                items: [
                    {
                        label: 'Themes', icon: 'palette', badge: '5',
                        items: [
                            { label: 'Blue - Amber', icon: 'brush', command: (event) => { this.changeTheme('blue'); } },
                            { label: 'Teal - Amber', icon: 'brush', command: (event) => { this.changeTheme('teal'); } },
                            { label: 'Blue Grey - Green', icon: 'brush', command: (event) => { this.changeTheme('blue-grey'); } },
                            { label: 'Cyan - Yellow', icon: 'brush', command: (event) => { this.changeTheme('cyan'); } },
                            { label: 'Dark - Blue', icon: 'brush', command: (event) => { this.changeTheme('dark-blue'); } },
                            { label: 'Dark - Green', icon: 'brush', command: (event) => { this.changeTheme('dark-green'); } },
                            { label: 'Light Blue - Green', icon: 'brush', command: (event) => { this.changeTheme('light-blue'); } },
                            { label: 'Indio - Cyan', icon: 'brush', command: (event) => { this.changeTheme('indigo'); } },
                            { label: 'Deep Purple - Pink', icon: 'brush', command: (event) => { this.changeTheme('deep-purple'); } },
                            { label: 'Green - Yellow', icon: 'brush', command: (event) => { this.changeTheme('green'); } }
                        ]
                    },
                    // {
                    //     label: 'Menu Modes', icon: 'settings_application',
                    //     items: [
                    //         { label: 'Static Menu', icon: 'menu', command: () => this.app.changeToStaticMenu() },
                    //         { label: 'Overlay Menu', icon: 'exit_to_app', command: () => this.app.changeToOverlayMenu() },
                    //         { label: 'Light Menu', icon: 'label_outline', command: () => this.app.darkMenu = false },
                    //         { label: 'Dark Menu', icon: 'label', command: () => this.app.darkMenu = true }
                    //     ]
                    // },
                ]
            },

            // uncomment the comming lines to see docs
            // {
            //     label: 'plugin', icon: 'subject',
            //     items: [
            //         {
            //             label: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'red-badge', routerLink: ['plugin/components'],
            //             items: [
            //                 {label: 'Sample Page', icon: 'desktop_mac', routerLink: ['plugin/components/sample']},
            //                 {label: 'Forms', icon: 'input', routerLink: ['plugin/components/forms']},
            //                 {label: 'Data', icon: 'grid_on', routerLink: ['plugin/components/data']},
            //                 {label: 'Panels', icon: 'content_paste', routerLink: ['plugin/components/panels']},
            //                 {label: 'Overlays', icon: 'content_copy', routerLink: ['plugin/components/overlays']},
            //                 {label: 'Menus', icon: 'menu', routerLink: ['plugin/components/menus']},
            //                 {label: 'Messages', icon: 'message', routerLink: ['plugin/components/messages']},
            //                 {label: 'Charts', icon: 'insert_chart', routerLink: ['plugin/components/charts']},
            //                 {label: 'File', icon: 'attach_file', routerLink: ['plugin/components/file']},
            //                 {label: 'Misc', icon: 'toys', routerLink: ['plugin/components/misc']},

            //             ],
            //         },
            //         {
            //             label: 'Template Pages', icon: 'get_app', routerLink: ['/plugin/pages'],
            //             items: [
            //                 {label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/plugin/pages/empty']},
            //                 {label: 'Landing Page', icon: 'flight_land', url: 'assets/pages/landing.html', target: '_blank'},
            //                 // {label: 'Login Page', icon: 'verified_user', routerLink: ['/login'], target: '_blank'},
            //                 {label: 'Error Page', icon: 'error', routerLink: ['/plugin/error'], target: '_blank'},
            //                 {label: '404 Page', icon: 'error_outline', routerLink: ['/plugin/404'], target: '_blank'},
            //                 {label: 'Access Denied Page', icon: 'security', routerLink: ['/plugin/accessdenied'], target: '_blank'}
            //             ]
            //         },

            // {
            //     label: 'Menu Hierarchy', icon: 'menu',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'subject',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'subject',
            //                     items: [
            //                         {label: 'Submenu 1.1.1', icon: 'subject'},
            //                         {label: 'Submenu 1.1.2', icon: 'subject'},
            //                         {label: 'Submenu 1.1.3', icon: 'subject'},
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'subject',
            //                     items: [
            //                         {label: 'Submenu 1.2.1', icon: 'subject'},
            //                         {label: 'Submenu 1.2.2', icon: 'subject'}
            //                     ]
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2', icon: 'subject',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1', icon: 'subject',
            //                     items: [
            //                         {label: 'Submenu 2.1.1', icon: 'subject'},
            //                         {label: 'Submenu 2.1.2', icon: 'subject'},
            //                         {label: 'Submenu 2.1.3', icon: 'subject'},
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2', icon: 'subject',
            //                     items: [
            //                         {label: 'Submenu 2.2.1', icon: 'subject'},
            //                         {label: 'Submenu 2.2.2', icon: 'subject'}
            //                     ]
            //                 },
            //             ]
            //         }
            //     ]
            // },
            //         {label: 'Utils', icon: 'build', routerLink: ['/plugin/utils']},
            //         {label: 'Documentation', icon: 'find_in_page', routerLink: ['/plugin/documentation']},
            //     ]
            // },
        ];
    }

    changeTheme(theme) {
        this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
        this.changeStyleSheetsColor('layout-css', 'layout-' + theme + '.css');
    }

    changeStyleSheetsColor(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = value;

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }
}
