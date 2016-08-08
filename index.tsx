import React = require("react");
import ReactDOM = require("react-dom");

import {
    Page,
    Navigator,
    NavigatorProps,
    Toolbar,
    BackButton,
    Icon,
    List,
    ListItem
} from "react-onsenui";

export interface MinimalNavigator {
    pushPage(route: ToolbarRoute): void;
}

export interface ToolbarRouteProps {    
    navigator: MinimalNavigator;
}

export interface ToolbarRoute {
    id: string;
    title: string | ((props: ToolbarRouteProps) => string);
    content(props: ToolbarRouteProps): React.ReactNode;    
}

export interface ToolbarNavigatorProps {
    initialRoute: ToolbarRoute;
}

function getTitle(route: ToolbarRoute, props: ToolbarRouteProps): string {
    const title = route.title;
    return typeof title === "function" ? title(props) : title;
}

export class ToolbarNavigator extends React.Component<ToolbarNavigatorProps, {}> {

    renderPage(route: ToolbarRoute, navigator: MinimalNavigator) {    
        return (
            <Page key={route.id}>
                
                <div>
                    <Toolbar>
                        <div className="left">
                            <BackButton>Back</BackButton>
                        </div>
                        <div className="center">
                            {getTitle(route, { navigator })}
                        </div>                        
                        <div className="right">
                            <span style={{ padding: 8 }}>
                                <Icon icon="ion-gear-a" />{"\u00a0" /*force text-like vertical alignment*/}
                            </span>
                        </div>                    
                    </Toolbar>
                    {route.content({ navigator })}
                </div>
            
            </Page>
        );
    }

    render() {
        return (
            <Navigator
                initialRoute={this.props.initialRoute}
                renderPage={(r, n) => this.renderPage(r, n)}
            />
        );
    }
}

export const ProviderList: ToolbarRoute = {
    id: "providersList",

    title: "Providers",

    content({navigator}) {
        return (
            <List
                dataSource={["a", "b", "c"]}
                renderRow={name => (
                    <ListItem key={name} tappable={true}>
                        {name}
                    </ListItem>
                )}
            />            
        ); 
    }
}

export const App = (props: {}) => (
    <ToolbarNavigator initialRoute={ProviderList} />
);

ReactDOM.render(<App/>, document.getElementById("root"));
