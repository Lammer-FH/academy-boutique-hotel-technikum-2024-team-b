import {defineStore} from "pinia";


export const useCollapseStore = defineStore('roomDetailView', {
        state: () => ({
            isCollapsed: false,
        }),

        actions: {
            changeVisibilityCollapse() {
                this.isCollapsed = !this.isCollapsed;
            },

            setCollapseTrue() {
                this.isCollapsed = true;
            },

            setCollapseFalse() {
                this.isCollapsed = false;
            }
        }
    }
)