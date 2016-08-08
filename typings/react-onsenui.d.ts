
declare module "react-onsenui" {

    import * as React from "react";

    export interface PageProps  {
    }

    export class Page extends React.Component<PageProps, {}> {
    }
    
    export interface ButtonProps {
        disabled?: boolean;
        ripple?: boolean;
        onClick?: () => void;
    }
    
    export class Button extends React.Component<ButtonProps, {}> {
    }

    export interface NavigatorProps {
        renderPage: (route: any, navigator: Navigator) => JSX.Element;
        initialRouteStack?: any[];
        initialRoute?: any;
        onPrePush?: () => void;
        onPostPush?: () => void;
        onPrePop?: () => void;
        onPostPop?: () => void;
        animation?: "slide" | "lift" | "fade" | "none";
        animationOptions?: string;
    }
    
    export class Navigator extends React.Component<NavigatorProps, {}> {
        pushPage(route: any): void;
        popPage(): void;
    }

    export interface ToolbarProps {
    }

    export class Toolbar extends React.Component<ToolbarProps, {}> {
    }

    export class BackButton extends React.Component<{}, {}> {
    }

    export interface ListProps {
        modifier?: string;
        dataSource: any[];
        renderRow: (rowData: any) => JSX.Element;
        renderHeader?: () => JSX.Element;
        renderFooter?: () => JSX.Element;
    }

    export class List extends React.Component<ListProps, {}> {        
    }

    export interface ListItemProps {
        onClick?: () => void;
        tappable: boolean;
    }

    export class ListItem extends React.Component<ListItemProps, {}> {
    }

    export interface IconProps {
        onClick?: () => void;
        icon: string;
    }

    export class Icon extends React.Component<IconProps, {}> {        
    }

    export interface InputChangeEvent {
        target: {
            value: string|boolean;
        }
    }

    export interface InputProps {
        modifier?: string;
        type: string;
        placeholder: string;
        float?: boolean;
        inputId?: string;
        value?: string;
        onChange?: (evt: InputChangeEvent) => void;
        disabled?: boolean;
    }

    export class Input extends React.Component<InputProps, {}> {        
    }
}
