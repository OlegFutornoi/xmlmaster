
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const Profile: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
      </div>
      
      <Card className="backdrop-blur-sm bg-white/50">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=256&h=256" alt="User" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl font-bold">John Doe</CardTitle>
              <CardDescription>Senior Product Designer</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">About</h3>
              <p className="text-muted-foreground mt-2">
                I am a product designer with over 10 years of experience creating user-centered digital products. I specialize in UI/UX design, user research, and design systems.
              </p>
            </div>
            
            <Separator />
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground block">Email</span>
                    <span>john.doe@example.com</span>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">Phone</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">Location</span>
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">UI Design</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">UX Research</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Design Systems</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Figma</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Sketch</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Prototyping</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">Adobe XD</span>
                  <span className="bg-secondary px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-lg font-medium mb-4">Work Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Senior Product Designer</h4>
                      <p className="text-sm text-muted-foreground">TechCorp Inc.</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2020 - Present</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">UX Designer</h4>
                      <p className="text-sm text-muted-foreground">Design Studio X</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2017 - 2020</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">UI Designer</h4>
                      <p className="text-sm text-muted-foreground">Creative Agency</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2014 - 2017</span>
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
