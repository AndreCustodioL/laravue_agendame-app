<script setup>
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()
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
    <pre>{{ authStore.isLoggedIn }}</pre>

    </div>
</template>