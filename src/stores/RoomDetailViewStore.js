import {defineStore} from "pinia";


export const useRoomDetailViewStore = defineStore('roomDetailView', {
        state: () => ({
            isCollapsed: false,
        }),

        actions: {
            changeVisibilityCollapse() {
                this.isCollapsed = !this.isCollapsed;
            },

            setCollapseTrue() {
                this.isCollapsed = true;
            }
        }
    }
)