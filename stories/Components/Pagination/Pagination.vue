<template>
    <nav aria-label="Page navigation" class="host-ticket_pagination-area">
        <p class="host-ticket_pagination-state" v-text="pageState"></p>
        <ul class="pagination">
            <li class="page-item">
                <a @click.prevent="changeNowPage(nowPage-1)" class="page-link-fillet page-link-outline page-link-default" :class="{'disabled': nowPage==1}" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                        <i class="far fa-angle-left"></i>
                    </span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li class="page-item" v-for="item in leftRange">
                <a @click.prevent="changeNowPage(item)" class="page-link-fillet page-link-outline page-link-default" :class="{'active':item == nowPage}" href="#" v-text="item"></a>
            </li>
            <li v-if="needLeftDots" class="page-item">
                ...
            </li>
            <li v-if="nowPageInHidden && ((nowPage-1) != 1)" class="page-item">
                <a @click.prevent="changeNowPage(nowPage-1)" class="page-link-fillet page-link-outline page-link-default" href="#" v-text="nowPage-1"></a>
            </li>
            <li v-if="nowPageInHidden" class="page-item">
                <a @click.prevent="changeNowPage(nowPage)" class="page-link-fillet page-link-outline page-link-default active" href="#" v-text="nowPage"></a>
            </li>
            <li v-if="nowPageInHidden && ((nowPage+1) != lastPage)" class="page-item">
                <a @click.prevent="changeNowPage(nowPage+1)" class="page-link-fillet page-link-outline page-link-default" href="#" v-text="nowPage+1"></a>
            </li>
            <li v-if="needRightDots" class="page-item">
                ...
            </li>
            <li v-if="isManyPageMode" v-for="item in rightRange" class="page-item">
                <a @click.prevent="changeNowPage(item)" class="page-link-fillet page-link-outline page-link-default" :class="{'active':item == nowPage}" href="#" v-text="item"></a>
            </li>
            <li class="page-item">
                <a @click.prevent="changeNowPage(nowPage+1)" class="page-link-fillet page-link-outline page-link-default" :class="{'disabled': nowPage==lastPage}" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                        <i class="far fa-angle-right"></i>
                    </span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    import _ from 'lodash';

    export default {
        props: {
            counts: Number,
        },
        data() {
            return {
                isManyPageMode: false,
                nowPage: 1,
            };
        },
        computed: {
            pageState() {
                let begin = ((this.nowPage - 1) * 10 + 1);
                let end = (this.nowPage * 10) > this.counts ? this.counts : (this.nowPage * 10);

                return begin + ' - ' + end + ' , total : ' + this.counts;
            },
            lastPage() {
                let lastPage = _.ceil(this.counts / 10);
                if (lastPage > 4) {
                    this.isManyPageMode = true;
                    return lastPage;
                }
                this.isManyPageMode = false;
                return lastPage;
            },
            leftRange() {

                if (this.lastPage > 4 && this.nowPage == 1) {
                    return _.range(1, 4);
                }
                if (this.lastPage > 4 && this.nowPage == 2) {
                    return _.range(1, 4);
                }
                if (this.lastPage > 4 && this.nowPage == 3) {
                    return _.range(1, 5);
                }
                if (this.lastPage <= 4) {
                    return _.range(1, this.lastPage + 1);
                }

                return _.range(1, 2);
            },
            rightRange() {
                if (this.isManyPageMode) {
                    if (this.nowPage == this.lastPage) {
                        return _.range(this.lastPage - 2, this.lastPage + 1)
                    }
                    return _.range(this.lastPage, this.lastPage + 1);
                }

                return [];
            },
            nowPageInHidden() {
                return (this.nowPage > _.last(this.leftRange)) && (this.nowPage < _.head(this.rightRange));
            },
            needLeftDots() {
                return (this.isManyPageMode && this.nowPage >= 4);
            },
            needRightDots() {
                return ((this.nowPage + 2) < this.lastPage && this.isManyPageMode);
            }

        },
        methods: {
            changeNowPage(page) {
                if ((page >= 1) && (page <= this.lastPage)) {
                    this.nowPage = page;
                    this.$emit('change-page', {page: page});
                }
            }
        },

    }
</script>
