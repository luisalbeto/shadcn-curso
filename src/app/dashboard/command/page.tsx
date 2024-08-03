'use client'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem ,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
import { useEffect, useState } from "react"

export default function Page() {

  const [open , setOpen] =  useState(false)

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
 
    document.addEventListener("keydown", onKeydown)
    return () => document.removeEventListener("keydown", onKeydown)
  }, [])
  
    return(
        <div className="mt-10 h-[200px] flex justify-center items-center">
            <CommandDialog open={open} onOpenChange={ setOpen }>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                <CommandItem  onSelect={ () => console.log("calendar")}>Calendar</CommandItem>
                <CommandItem onSelect={ () => console.log("search emoji")}>Search Emoji</CommandItem >
                <CommandItem onSelect={ () => console.log("Calculator")}>Calculator</CommandItem >
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                <CommandItem onSelect={ () => console.log("profile")}>Profile</CommandItem >
                <CommandItem onSelect={ () => console.log("billing")}>Billing</CommandItem >
                <CommandItem onSelect={ () => console.log("settings")}>Settings</CommandItem >
                </CommandGroup>
            </CommandList>
            </CommandDialog>

    <div>
        <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{''}
        or {''}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">CTRL</span> + J
        </kbd>
      </p>
    </div>

        </div>
    )
}