
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';

const Profile: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-4 md:space-y-6 px-2 md:px-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Profile</h1>
      </div>
      
      <Card className="backdrop-blur-sm bg-white/50">
        <CardHeader className="px-4 py-4 md:pb-4 md:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
            <Avatar className="h-14 w-14 md:h-16 md:w-16">
              <AvatarImage src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=256&h=256" alt="User" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl md:text-2xl font-bold">John Doe</CardTitle>
              <CardDescription className="text-sm md:text-base">Senior Product Designer</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-4 md:px-6 md:pb-6">
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-base md:text-lg font-medium">About</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-1 md:mt-2">
                I am a product designer with over 10 years of experience creating user-centered digital products. I specialize in UI/UX design, user research, and design systems.
              </p>
            </div>
            
            <Separator />
            
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-base md:text-lg font-medium mb-2 md:mb-4">Contact Information</h3>
                <div className="space-y-2 md:space-y-3">
                  <div>
                    <span className="text-xs md:text-sm text-muted-foreground block">Email</span>
                    <span className="text-sm md:text-base">john.doe@example.com</span>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm text-muted-foreground block">Phone</span>
                    <span className="text-sm md:text-base">+1 (555) 123-4567</span>
                  </div>
                  <div>
                    <span className="text-xs md:text-sm text-muted-foreground block">Location</span>
                    <span className="text-sm md:text-base">San Francisco, CA</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-base md:text-lg font-medium mb-2 md:mb-4">Skills</h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="bg-secondary px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm">UI Design</span>
                  <span className="bg-secondary px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm">UX Research</span>
                  <span className="bg-secondary px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm">Design Systems</span>
                  <span className="bg-secondary px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm">Figma</span>
                  <span className="bg-secondary px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm">Sketch</span>
                  <span className="bg-secondary px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm">Prototyping</span>
                  <span className="bg-secondary px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm">Adobe XD</span>
                  <span className="bg-secondary px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm">HTML/CSS</span>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-base md:text-lg font-medium mb-2 md:mb-4">Work Experience</h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h4 className="font-medium text-sm md:text-base">Senior Product Designer</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">TechCorp Inc.</p>
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground">2020 - Present</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h4 className="font-medium text-sm md:text-base">UX Designer</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">Design Studio X</p>
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground">2017 - 2020</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h4 className="font-medium text-sm md:text-base">UI Designer</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">Creative Agency</p>
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground">2014 - 2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
