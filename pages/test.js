import { useState, useEffect } from "react";
import {
  Card,
  Grid,
  List,
  ListItem,
  Metric,
  Tab,
  TabList,
  Text,
  Title,
} from "@tremor/react";
import { PopulationCard } from "@/components/PopulationCard";
import { TextFeedCard } from "@/components/TextFeedCard";
import { InfoCard1 } from "@/components/InfoCard1";
import { InfoCard2 } from "@/components/InfoCard2";
import { StatCard2 } from "@/components/StatCard2";
import { StatCard3 } from "@/components/StatCard3";

export default function KpiCardGrid() {
  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      {
        <>
          <Grid numColsLg={3} className="mt-6 gap-6">
            <PopulationCard />
            <StatCard2 />
            <StatCard3 />
          </Grid>

          <div className="mt-6">
            <TextFeedCard />
          </div>

          <Grid numColsLg={2} className="mt-6 gap-6">
            <InfoCard1 />
            <InfoCard2 />
          </Grid>
        </>
      }
    </main>
  );
}
