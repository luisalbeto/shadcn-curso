'use client'

import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";

export default function Page() {
    return(
        <div className="grid grid-cols-5 gap-2">

            <Button>default</Button>
            <Button onClick={() => {console.log('hello')}} variant='destructive'>default</Button>
            <Button variant='ghost'>default</Button>
            <Button variant='link'>default</Button>
            <Button variant='outline'>default</Button>
            <Button variant='secondary'>default</Button>
            <Button variant='success'>default</Button>
            <Button disabled>default</Button>
            <Button capitalize={false}>capitalize false</Button>
            <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
            </Button>
            <Button>
            <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
            </Button>


        </div>
    )
}