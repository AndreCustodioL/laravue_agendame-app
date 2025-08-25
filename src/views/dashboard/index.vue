<script setup>
import { useMeStore } from '@/stores/me';
const meStore = useMeStore()
/*Call Components*/
// import SalesOverview from '@/components/dashboard/SalesOverview.vue';
// import YearlyBreakup from '@/components/dashboard/YearlyBreakup.vue';
// import MonthlyEarning from '@/components/dashboard/MonthlyEarnings.vue';
// import RecentTransaction from '@/components/dashboard/RecentTransaction.vue';
// import ProductPerformance from '@/components/dashboard/ProductPerformance.vue';
// import ProductCards from '@/components/dashboard/ProductCards.vue';
</script>
<template>
    <div>
    Dashboard
    <br>
    <pre>{{ meStore.user }}</pre>
    <pre>{{ meStore.isLoggedIn }}</pre>

    </div>
</template>