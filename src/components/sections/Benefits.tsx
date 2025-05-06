import { useState, useEffect } from "react";
import { Clock, DollarSign, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.round(start));
    }, 20);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <span>{count}</span>;
};

const BenefitItem = ({ icon: Icon, title, description, number, delay }) => {
  return (
    <div
      className="flex flex-col items-center p-6 text-center h-full transition-opacity duration-500 ease-in-out bg-white rounded-xl shadow-md hover:shadow-xl hover
