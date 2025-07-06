import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs"; 

export default function Home() {
  return (
    <div>
<h2>Made by Akarr18</h2>
<Button variant="ghost">Subscribe</Button>
<UserButton/>

    </div>
  );
}
