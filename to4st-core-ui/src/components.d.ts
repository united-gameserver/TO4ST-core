/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ColumnProps, FilterProps, InputState } from "./components/general-ui-stuff/to4st-list/to4st-list";
import { ColumnDetailProps } from "./components/general-ui-stuff/to4st-details/to4st-details";
import { EventEmitter } from "@stencil/core";
import { RouterHistory } from "@stencil/router";
import { ColumnProps as ColumnProps1, FilterProps as FilterProps1 } from "./components/general-ui-stuff/to4st-list/to4st-list";
import { TAppInfoApi } from "./services/app-config.service";
export namespace Components {
    interface To4stApiKeys {
    }
    interface To4stBanlistPartners {
    }
    interface To4stDetails {
        /**
          * Allows overriding visibility of delete
         */
        "canItemBeDeleted": (item: any) => boolean;
        /**
          * Properties for columns
         */
        "columns": ColumnDetailProps<any>[];
        "columnsCount": number;
        "defaultCreateObject": any;
        /**
          * Filters
         */
        "filters": FilterProps[];
        "hasSearch": boolean;
        /**
          * Has pagination
         */
        "listHasPagination": boolean;
        /**
          * Block all inputs, display loading modal
         */
        "loadingInputBlock": boolean;
        /**
          * Override orderBy assign
         */
        "mapOrderByAssign": (orderByString: string) => string;
        "mapPreSerializeEntity": (entity: any) => {
    mapped: any;
    fileName?: string;
  };
        "name": string;
        /**
          * Striped table
         */
        "stripedTable": boolean;
        "useDefaultListCreate": boolean;
    }
    interface To4stEditModal {
        /**
          * Properties used to retrieve input elements
         */
        "columns": ColumnProps<any>[];
        /**
          * Current input error
         */
        "currentError": string;
        /**
          * Current input state of modal
         */
        "currentInputState": InputState;
        /**
          * Current item which is being edited
         */
        "currentItem": any;
        /**
          * Freeze commit button
         */
        "freeze": boolean;
    }
    interface To4stFilterModal {
        /**
          * Filter properties
         */
        "filters": FilterProps[];
        /**
          * Filter visibility
         */
        "isVisible": boolean;
    }
    interface To4stGameserverConfig {
    }
    interface To4stGameserverConfigList {
    }
    interface To4stGameserverList {
    }
    interface To4stGameserverSettings {
    }
    interface To4stGeneralSettings {
    }
    interface To4stHeader {
        /**
          * Current router history
         */
        "history": RouterHistory;
    }
    interface To4stHome {
    }
    interface To4stList {
        /**
          * Allow selection of rows
         */
        "allowSelect": boolean;
        /**
          * Properties for columns
         */
        "columns": ColumnProps<any>[];
        /**
          * Current items
         */
        "content": {}[];
        /**
          * Current page
         */
        "currentPage": number;
        /**
          * Filters
         */
        "filters": FilterProps[];
        /**
          * Supports Create
         */
        "hasCreate": boolean;
        /**
          * Display pagination features
         */
        "hasPagination": boolean;
        /**
          * Display search input box
         */
        "hasSearch": boolean;
        /**
          * Supports update, delete
         */
        "hasUpdate": boolean;
        /**
          * Block all inputs, display loading modal
         */
        "loadingInputBlock": boolean;
        /**
          * Name of list
         */
        "name": string;
        /**
          * Page count
         */
        "pagesCount": number;
        /**
          * Striped table
         */
        "striped": boolean;
    }
    interface To4stLoginModal {
        /**
          * Is visible?
         */
        "visible": boolean;
    }
    interface To4stMatchConfigList {
    }
    interface To4stPlayerStatistics {
    }
    interface To4stPlayerStatisticsList {
    }
    interface To4stRegisteredPlayersList {
    }
    interface To4stRegisteredPlayersSettings {
    }
    interface To4stRoot {
    }
    interface To4stSettings {
    }
    interface To4stSwitch {
        "disabled": boolean;
        /**
          * Error appearence
         */
        "isError": boolean;
        /**
          * Warning appearence
         */
        "isWarning": boolean;
        /**
          * Has label
         */
        "label": string;
        /**
          * Optional message
         */
        "message"?: string;
        /**
          * Mirror
         */
        "rtl": boolean;
        /**
          * Value
         */
        "value"?: boolean;
    }
}
declare global {
    interface HTMLTo4stApiKeysElement extends Components.To4stApiKeys, HTMLStencilElement {
    }
    var HTMLTo4stApiKeysElement: {
        prototype: HTMLTo4stApiKeysElement;
        new (): HTMLTo4stApiKeysElement;
    };
    interface HTMLTo4stBanlistPartnersElement extends Components.To4stBanlistPartners, HTMLStencilElement {
    }
    var HTMLTo4stBanlistPartnersElement: {
        prototype: HTMLTo4stBanlistPartnersElement;
        new (): HTMLTo4stBanlistPartnersElement;
    };
    interface HTMLTo4stDetailsElement extends Components.To4stDetails, HTMLStencilElement {
    }
    var HTMLTo4stDetailsElement: {
        prototype: HTMLTo4stDetailsElement;
        new (): HTMLTo4stDetailsElement;
    };
    interface HTMLTo4stEditModalElement extends Components.To4stEditModal, HTMLStencilElement {
    }
    var HTMLTo4stEditModalElement: {
        prototype: HTMLTo4stEditModalElement;
        new (): HTMLTo4stEditModalElement;
    };
    interface HTMLTo4stFilterModalElement extends Components.To4stFilterModal, HTMLStencilElement {
    }
    var HTMLTo4stFilterModalElement: {
        prototype: HTMLTo4stFilterModalElement;
        new (): HTMLTo4stFilterModalElement;
    };
    interface HTMLTo4stGameserverConfigElement extends Components.To4stGameserverConfig, HTMLStencilElement {
    }
    var HTMLTo4stGameserverConfigElement: {
        prototype: HTMLTo4stGameserverConfigElement;
        new (): HTMLTo4stGameserverConfigElement;
    };
    interface HTMLTo4stGameserverConfigListElement extends Components.To4stGameserverConfigList, HTMLStencilElement {
    }
    var HTMLTo4stGameserverConfigListElement: {
        prototype: HTMLTo4stGameserverConfigListElement;
        new (): HTMLTo4stGameserverConfigListElement;
    };
    interface HTMLTo4stGameserverListElement extends Components.To4stGameserverList, HTMLStencilElement {
    }
    var HTMLTo4stGameserverListElement: {
        prototype: HTMLTo4stGameserverListElement;
        new (): HTMLTo4stGameserverListElement;
    };
    interface HTMLTo4stGameserverSettingsElement extends Components.To4stGameserverSettings, HTMLStencilElement {
    }
    var HTMLTo4stGameserverSettingsElement: {
        prototype: HTMLTo4stGameserverSettingsElement;
        new (): HTMLTo4stGameserverSettingsElement;
    };
    interface HTMLTo4stGeneralSettingsElement extends Components.To4stGeneralSettings, HTMLStencilElement {
    }
    var HTMLTo4stGeneralSettingsElement: {
        prototype: HTMLTo4stGeneralSettingsElement;
        new (): HTMLTo4stGeneralSettingsElement;
    };
    interface HTMLTo4stHeaderElement extends Components.To4stHeader, HTMLStencilElement {
    }
    var HTMLTo4stHeaderElement: {
        prototype: HTMLTo4stHeaderElement;
        new (): HTMLTo4stHeaderElement;
    };
    interface HTMLTo4stHomeElement extends Components.To4stHome, HTMLStencilElement {
    }
    var HTMLTo4stHomeElement: {
        prototype: HTMLTo4stHomeElement;
        new (): HTMLTo4stHomeElement;
    };
    interface HTMLTo4stListElement extends Components.To4stList, HTMLStencilElement {
    }
    var HTMLTo4stListElement: {
        prototype: HTMLTo4stListElement;
        new (): HTMLTo4stListElement;
    };
    interface HTMLTo4stLoginModalElement extends Components.To4stLoginModal, HTMLStencilElement {
    }
    var HTMLTo4stLoginModalElement: {
        prototype: HTMLTo4stLoginModalElement;
        new (): HTMLTo4stLoginModalElement;
    };
    interface HTMLTo4stMatchConfigListElement extends Components.To4stMatchConfigList, HTMLStencilElement {
    }
    var HTMLTo4stMatchConfigListElement: {
        prototype: HTMLTo4stMatchConfigListElement;
        new (): HTMLTo4stMatchConfigListElement;
    };
    interface HTMLTo4stPlayerStatisticsElement extends Components.To4stPlayerStatistics, HTMLStencilElement {
    }
    var HTMLTo4stPlayerStatisticsElement: {
        prototype: HTMLTo4stPlayerStatisticsElement;
        new (): HTMLTo4stPlayerStatisticsElement;
    };
    interface HTMLTo4stPlayerStatisticsListElement extends Components.To4stPlayerStatisticsList, HTMLStencilElement {
    }
    var HTMLTo4stPlayerStatisticsListElement: {
        prototype: HTMLTo4stPlayerStatisticsListElement;
        new (): HTMLTo4stPlayerStatisticsListElement;
    };
    interface HTMLTo4stRegisteredPlayersListElement extends Components.To4stRegisteredPlayersList, HTMLStencilElement {
    }
    var HTMLTo4stRegisteredPlayersListElement: {
        prototype: HTMLTo4stRegisteredPlayersListElement;
        new (): HTMLTo4stRegisteredPlayersListElement;
    };
    interface HTMLTo4stRegisteredPlayersSettingsElement extends Components.To4stRegisteredPlayersSettings, HTMLStencilElement {
    }
    var HTMLTo4stRegisteredPlayersSettingsElement: {
        prototype: HTMLTo4stRegisteredPlayersSettingsElement;
        new (): HTMLTo4stRegisteredPlayersSettingsElement;
    };
    interface HTMLTo4stRootElement extends Components.To4stRoot, HTMLStencilElement {
    }
    var HTMLTo4stRootElement: {
        prototype: HTMLTo4stRootElement;
        new (): HTMLTo4stRootElement;
    };
    interface HTMLTo4stSettingsElement extends Components.To4stSettings, HTMLStencilElement {
    }
    var HTMLTo4stSettingsElement: {
        prototype: HTMLTo4stSettingsElement;
        new (): HTMLTo4stSettingsElement;
    };
    interface HTMLTo4stSwitchElement extends Components.To4stSwitch, HTMLStencilElement {
    }
    var HTMLTo4stSwitchElement: {
        prototype: HTMLTo4stSwitchElement;
        new (): HTMLTo4stSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "to4st-api-keys": HTMLTo4stApiKeysElement;
        "to4st-banlist-partners": HTMLTo4stBanlistPartnersElement;
        "to4st-details": HTMLTo4stDetailsElement;
        "to4st-edit-modal": HTMLTo4stEditModalElement;
        "to4st-filter-modal": HTMLTo4stFilterModalElement;
        "to4st-gameserver-config": HTMLTo4stGameserverConfigElement;
        "to4st-gameserver-config-list": HTMLTo4stGameserverConfigListElement;
        "to4st-gameserver-list": HTMLTo4stGameserverListElement;
        "to4st-gameserver-settings": HTMLTo4stGameserverSettingsElement;
        "to4st-general-settings": HTMLTo4stGeneralSettingsElement;
        "to4st-header": HTMLTo4stHeaderElement;
        "to4st-home": HTMLTo4stHomeElement;
        "to4st-list": HTMLTo4stListElement;
        "to4st-login-modal": HTMLTo4stLoginModalElement;
        "to4st-match-config-list": HTMLTo4stMatchConfigListElement;
        "to4st-player-statistics": HTMLTo4stPlayerStatisticsElement;
        "to4st-player-statistics-list": HTMLTo4stPlayerStatisticsListElement;
        "to4st-registered-players-list": HTMLTo4stRegisteredPlayersListElement;
        "to4st-registered-players-settings": HTMLTo4stRegisteredPlayersSettingsElement;
        "to4st-root": HTMLTo4stRootElement;
        "to4st-settings": HTMLTo4stSettingsElement;
        "to4st-switch": HTMLTo4stSwitchElement;
    }
}
declare namespace LocalJSX {
    interface To4stApiKeys {
    }
    interface To4stBanlistPartners {
    }
    interface To4stDetails {
        /**
          * Allows overriding visibility of delete
         */
        "canItemBeDeleted"?: (item: any) => boolean;
        /**
          * Properties for columns
         */
        "columns"?: ColumnDetailProps<any>[];
        "columnsCount"?: number;
        "defaultCreateObject"?: any;
        /**
          * Filters
         */
        "filters"?: FilterProps[];
        "hasSearch"?: boolean;
        /**
          * Has pagination
         */
        "listHasPagination"?: boolean;
        /**
          * Block all inputs, display loading modal
         */
        "loadingInputBlock"?: boolean;
        /**
          * Override orderBy assign
         */
        "mapOrderByAssign"?: (orderByString: string) => string;
        "mapPreSerializeEntity"?: (entity: any) => {
    mapped: any;
    fileName?: string;
  };
        "name"?: string;
        /**
          * Event called when save request resolves
          * @emits error to display, empty string for if successful
         */
        "onAfterSave"?: (event: CustomEvent<string>) => void;
        "onDeleteEntity"?: (event: CustomEvent<{
    entity: any;
    onDeletedEntity: () => void;
  }>) => void;
        "onSaveEntity"?: (event: CustomEvent<{
    entity: any;
    transactionId: string;
    afterEx: EventEmitter<string>;
  }>) => void;
        "onUpdateEntities"?: (event: CustomEvent<{
    page?: number;
    search?: string;
    orderBy?: string;
    orderDesc?: boolean;

    onFetchedData: (data: any[], pageCount: number) => void;
  }>) => void;
        /**
          * Striped table
         */
        "stripedTable"?: boolean;
        "useDefaultListCreate"?: boolean;
    }
    interface To4stEditModal {
        /**
          * Properties used to retrieve input elements
         */
        "columns"?: ColumnProps<any>[];
        /**
          * Current input error
         */
        "currentError"?: string;
        /**
          * Current input state of modal
         */
        "currentInputState"?: InputState;
        /**
          * Current item which is being edited
         */
        "currentItem"?: any;
        /**
          * Freeze commit button
         */
        "freeze"?: boolean;
        /**
          * Event used to change a value of current item
         */
        "onChangeKeyValue"?: (event: CustomEvent<{ key: string; value: any }>) => void;
        /**
          * Close event
         */
        "onClose"?: (event: CustomEvent<void>) => void;
        /**
          * Close error message event
         */
        "onCloseErrorMessage"?: (event: CustomEvent<void>) => void;
        /**
          * Delete current item event
         */
        "onDelete"?: (event: CustomEvent<void>) => void;
        /**
          * Save event
         */
        "onSave"?: (event: CustomEvent<void>) => void;
    }
    interface To4stFilterModal {
        /**
          * Filter properties
         */
        "filters"?: FilterProps[];
        /**
          * Filter visibility
         */
        "isVisible"?: boolean;
        /**
          * Close event
         */
        "onClose"?: (event: CustomEvent<void>) => void;
    }
    interface To4stGameserverConfig {
    }
    interface To4stGameserverConfigList {
    }
    interface To4stGameserverList {
    }
    interface To4stGameserverSettings {
    }
    interface To4stGeneralSettings {
    }
    interface To4stHeader {
        /**
          * Current router history
         */
        "history"?: RouterHistory;
        /**
          * Login event
         */
        "onLogin"?: (event: CustomEvent<void>) => void;
        /**
          * Logout event
         */
        "onLogout"?: (event: CustomEvent<void>) => void;
    }
    interface To4stHome {
    }
    interface To4stList {
        /**
          * Allow selection of rows
         */
        "allowSelect"?: boolean;
        /**
          * Properties for columns
         */
        "columns"?: ColumnProps<any>[];
        /**
          * Current items
         */
        "content"?: {}[];
        /**
          * Current page
         */
        "currentPage"?: number;
        /**
          * Filters
         */
        "filters"?: FilterProps[];
        /**
          * Supports Create
         */
        "hasCreate"?: boolean;
        /**
          * Display pagination features
         */
        "hasPagination"?: boolean;
        /**
          * Display search input box
         */
        "hasSearch"?: boolean;
        /**
          * Supports update, delete
         */
        "hasUpdate"?: boolean;
        /**
          * Block all inputs, display loading modal
         */
        "loadingInputBlock"?: boolean;
        /**
          * Name of list
         */
        "name"?: string;
        /**
          * Event called when save request resolves
          * @emits error to display, empty string for if successful
         */
        "onAfterSave"?: (event: CustomEvent<string>) => void;
        /**
          * Event called when order should be changed
          * @emits newOrder
         */
        "onChangedOrder"?: (event: CustomEvent<{
    orderBy: string;
    orderDesc: boolean;
  }>) => void;
        /**
          * Event fired with item that is selected
          * @emits item which is selected
         */
        "onItemSelected"?: (event: CustomEvent<any>) => void;
        /**
          * Event to handle pagination
          * @emits page
         */
        "onPagination"?: (event: CustomEvent<number>) => void;
        /**
          * Event for remove
          * @emits item to save
         */
        "onRemoveItem"?: (event: CustomEvent<any>) => void;
        /**
          * Event called when save button pressed
         */
        "onSaveItem"?: (event: CustomEvent<{
    /**
     * Item which is being saved
     */
    item: any;

    /**
     * Is edit operation?
     */
    isEdit?: boolean;

    /**
     * Transaction id for operation
     */
    transactionId?: string;

    /**
     * Callback which has to be executed when save is resolved
     * @emits error to display, empty string for if successful
     */
    afterSaveExecuted: EventEmitter<string>;
  }>) => void;
        /**
          * Event for search
          * @emits search string
         */
        "onSearchItem"?: (event: CustomEvent<string>) => void;
        /**
          * Page count
         */
        "pagesCount"?: number;
        /**
          * Striped table
         */
        "striped"?: boolean;
    }
    interface To4stLoginModal {
        /**
          * Close login modal event
         */
        "onClose"?: (event: CustomEvent<void>) => void;
        /**
          * Successful login event
         */
        "onSuccessfulLogin"?: (event: CustomEvent<{
    /**
     * Current appConfig
     */
    appconfig: TAppInfoApi;

    /**
     * Current JWT
     */
    token: string;
  }>) => void;
        /**
          * Is visible?
         */
        "visible"?: boolean;
    }
    interface To4stMatchConfigList {
    }
    interface To4stPlayerStatistics {
    }
    interface To4stPlayerStatisticsList {
    }
    interface To4stRegisteredPlayersList {
    }
    interface To4stRegisteredPlayersSettings {
    }
    interface To4stRoot {
    }
    interface To4stSettings {
    }
    interface To4stSwitch {
        "disabled"?: boolean;
        /**
          * Error appearence
         */
        "isError"?: boolean;
        /**
          * Warning appearence
         */
        "isWarning"?: boolean;
        /**
          * Has label
         */
        "label"?: string;
        /**
          * Optional message
         */
        "message"?: string;
        /**
          * On toggle
         */
        "onToggle"?: (event: CustomEvent<boolean>) => void;
        /**
          * Mirror
         */
        "rtl"?: boolean;
        /**
          * Value
         */
        "value"?: boolean;
    }
    interface IntrinsicElements {
        "to4st-api-keys": To4stApiKeys;
        "to4st-banlist-partners": To4stBanlistPartners;
        "to4st-details": To4stDetails;
        "to4st-edit-modal": To4stEditModal;
        "to4st-filter-modal": To4stFilterModal;
        "to4st-gameserver-config": To4stGameserverConfig;
        "to4st-gameserver-config-list": To4stGameserverConfigList;
        "to4st-gameserver-list": To4stGameserverList;
        "to4st-gameserver-settings": To4stGameserverSettings;
        "to4st-general-settings": To4stGeneralSettings;
        "to4st-header": To4stHeader;
        "to4st-home": To4stHome;
        "to4st-list": To4stList;
        "to4st-login-modal": To4stLoginModal;
        "to4st-match-config-list": To4stMatchConfigList;
        "to4st-player-statistics": To4stPlayerStatistics;
        "to4st-player-statistics-list": To4stPlayerStatisticsList;
        "to4st-registered-players-list": To4stRegisteredPlayersList;
        "to4st-registered-players-settings": To4stRegisteredPlayersSettings;
        "to4st-root": To4stRoot;
        "to4st-settings": To4stSettings;
        "to4st-switch": To4stSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "to4st-api-keys": LocalJSX.To4stApiKeys & JSXBase.HTMLAttributes<HTMLTo4stApiKeysElement>;
            "to4st-banlist-partners": LocalJSX.To4stBanlistPartners & JSXBase.HTMLAttributes<HTMLTo4stBanlistPartnersElement>;
            "to4st-details": LocalJSX.To4stDetails & JSXBase.HTMLAttributes<HTMLTo4stDetailsElement>;
            "to4st-edit-modal": LocalJSX.To4stEditModal & JSXBase.HTMLAttributes<HTMLTo4stEditModalElement>;
            "to4st-filter-modal": LocalJSX.To4stFilterModal & JSXBase.HTMLAttributes<HTMLTo4stFilterModalElement>;
            "to4st-gameserver-config": LocalJSX.To4stGameserverConfig & JSXBase.HTMLAttributes<HTMLTo4stGameserverConfigElement>;
            "to4st-gameserver-config-list": LocalJSX.To4stGameserverConfigList & JSXBase.HTMLAttributes<HTMLTo4stGameserverConfigListElement>;
            "to4st-gameserver-list": LocalJSX.To4stGameserverList & JSXBase.HTMLAttributes<HTMLTo4stGameserverListElement>;
            "to4st-gameserver-settings": LocalJSX.To4stGameserverSettings & JSXBase.HTMLAttributes<HTMLTo4stGameserverSettingsElement>;
            "to4st-general-settings": LocalJSX.To4stGeneralSettings & JSXBase.HTMLAttributes<HTMLTo4stGeneralSettingsElement>;
            "to4st-header": LocalJSX.To4stHeader & JSXBase.HTMLAttributes<HTMLTo4stHeaderElement>;
            "to4st-home": LocalJSX.To4stHome & JSXBase.HTMLAttributes<HTMLTo4stHomeElement>;
            "to4st-list": LocalJSX.To4stList & JSXBase.HTMLAttributes<HTMLTo4stListElement>;
            "to4st-login-modal": LocalJSX.To4stLoginModal & JSXBase.HTMLAttributes<HTMLTo4stLoginModalElement>;
            "to4st-match-config-list": LocalJSX.To4stMatchConfigList & JSXBase.HTMLAttributes<HTMLTo4stMatchConfigListElement>;
            "to4st-player-statistics": LocalJSX.To4stPlayerStatistics & JSXBase.HTMLAttributes<HTMLTo4stPlayerStatisticsElement>;
            "to4st-player-statistics-list": LocalJSX.To4stPlayerStatisticsList & JSXBase.HTMLAttributes<HTMLTo4stPlayerStatisticsListElement>;
            "to4st-registered-players-list": LocalJSX.To4stRegisteredPlayersList & JSXBase.HTMLAttributes<HTMLTo4stRegisteredPlayersListElement>;
            "to4st-registered-players-settings": LocalJSX.To4stRegisteredPlayersSettings & JSXBase.HTMLAttributes<HTMLTo4stRegisteredPlayersSettingsElement>;
            "to4st-root": LocalJSX.To4stRoot & JSXBase.HTMLAttributes<HTMLTo4stRootElement>;
            "to4st-settings": LocalJSX.To4stSettings & JSXBase.HTMLAttributes<HTMLTo4stSettingsElement>;
            "to4st-switch": LocalJSX.To4stSwitch & JSXBase.HTMLAttributes<HTMLTo4stSwitchElement>;
        }
    }
}
