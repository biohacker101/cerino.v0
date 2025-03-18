import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <Skeleton className="h-8 w-[150px]" />
                    <Skeleton className="h-4 w-[250px]" />
                </div>
                <div className="flex space-x-2">
                    <Skeleton className="h-10 w-[120px]" />
                    <Skeleton className="h-10 w-[120px]" />
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex space-x-4">
                    <Skeleton className="h-10 w-[100px]" />
                    <Skeleton className="h-10 w-[100px]" />
                    <Skeleton className="h-10 w-[100px]" />
                    <Skeleton className="h-10 w-[100px]" />
                </div>
                <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead>
                                <tr className="border-b">
                                    {Array.from({ length: 9 }).map((_, i) => (
                                        <th key={i} className="h-12 px-4">
                                            <Skeleton className="h-4 w-[100px]" />
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <tr key={i} className="border-b">
                                        {Array.from({ length: 9 }).map((_, j) => (
                                            <td key={j} className="p-4">
                                                <Skeleton className="h-4 w-[100px]" />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
} 